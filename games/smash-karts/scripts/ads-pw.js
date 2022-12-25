'use strict';

var rampCurrPath;
var rampCurrAdUnitId;
var rampCurrAdUnitType;
var isVideoAdPlaying;

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
}

function hideOffCanvasAds(adResArray)
{
}

function rampInitialised()
{
    return playwireRampInitialised;
}

function rampVideoPlayerInitialised()
{
    return rampInitialised() && ramp.settings.slots.rewarded_video !== undefined;
}

function rampDisplayAdUnit(path, adUnitId, adUnitType)
{
    if(!rampInitialised())
        return;

    if (!isVideoAdPlaying && rampCurrAdUnitId != adUnitId && typeof ramp.setPath === "function" && typeof ramp.addUnits === "function")
    {
        rampCurrPath = path;

        console.log(`playwire setPath: ${path}`);
        ramp.setPath(path).then(() =>
        {
            var pwUnits = [
                {
                    selectorId: adUnitId,
                    type: adUnitType
                }
            ];

            rampCurrAdUnitId = adUnitId;
            rampCurrAdUnitType = adUnitType;

            ramp.addUnits(pwUnits).then(() =>
            {
                console.log(`playwire addUnits: ${adUnitId} ${adUnitType}`);
                ramp.displayUnits();
            }).catch((e) =>
            {
                ramp.displayUnits();
                console.log(`playwire addUnits ${adUnitId} ${adUnitType} error: ${e}`);
            });

        }).catch((e) =>
        {
            console.log(`playwire setPath ${path} error: ${e}`);
        });

    }
}

function hideAllAdUnits()
{
    if(!rampInitialised())
        return;

    if(typeof ramp.destroyUnits === "function" && rampCurrAdUnitId != null)
    {
        console.log("playwire destroyAllUnits");

        ramp.destroyUnits("all");

        //set path to gamepage as no ad units are enabled for gamepage
        ramp.setPath("gamepage");

        rampCurrAdUnitId = null;
        rampCurrAdUnitType = null;
    }
}

function requestMainMenuAd()
{
    rampDisplayAdUnit("mainmenu", "pw_mainmenu", "med_rect_atf");
}

function destroyMainMenuAd()
{
    hideAllAdUnits();
}

function requestWinCeremonyAd(interstialRequested)
{
    rampDisplayAdUnit("roundend", "pw_roundend", "med_rect_btf");
}

function destroyWinCeremonyAd()
{
    hideAllAdUnits();
}

function requestDeathAd()
{
    rampDisplayAdUnit("ondeath", "pw_ondeath", "leaderboard_atf");
}

function destroyDeathAd()
{
    hideAllAdUnits();
}

//--------- OLD NON REWARDED PLAYWIRE VIDEO PLAYER ------------

// const boltInterstitialVideoPlayerId = "tyche_trendi_video";
// var rampPathPreInterstital;

// function showInterstitial(audioOn, interstitialType, interstitialName)
// {
//     rampPathPreInterstital = rampCurrPath;

//     rampChangePathWrapper("roundendvid");

//     //vid container
//     var pwVideoContainer = document.getElementById("pw-video-container");
//     pwVideoContainer.style.display = "block";

//     window.PageOS.BUS.on('gotConfig', function(e)
//     {
//         trySetupBoltCallbacks();
//     });
// }

// function trySetupBoltCallbacks()
// {
//     if (typeof Bolt !== 'undefined')
//     {
//         Bolt.on(boltInterstitialVideoPlayerId, Bolt.BOLT_CONTENT_COMPLETE, hideInterstitial);
//         Bolt.on(boltInterstitialVideoPlayerId, Bolt.BOLT_AD_COMPLETE, hideInterstitial);
//     }
// }

// function hideInterstitial()
// {
//     if (typeof Bolt !== 'undefined')
//     {
//         Bolt.removeVideo(boltInterstitialVideoPlayerId, true);
//     }

//     rampChangePathWrapper(rampPathPreInterstital);

//     //vid container
//     var pwVideoContainer = document.getElementById("pw-video-container");
//     pwVideoContainer.style.display = "none";
// }

//---------------------------------------------------------------

function showInterstitial(audioOn, interstitialType, interstitialName)
{
    if(!rampVideoPlayerInitialised())
        return;

    if (!isVideoAdPlaying && firebase.auth().currentUser != null)
    {
        isVideoAdPlaying = true;

        var functionRef = firebase.functions().httpsCallable("getPlaywireRewardedVideoCodeNew");

        functionRef(null).then((response) =>
        {
            window.PageOS.BUS.on('gotConfig', function(e)
            {
                addNonRewardedVideoStylingObserver();
            });

            var pwVideoCode = response.data.code;

            if (pwVideoCode !== undefined)
            {
                interstitialStart();

                setRewardedVideoMsgBoxEnabled(false);

                //Note we use the rewarded video player but don't actually reward the player
                //This is because there are issues on playwires side if we use both the rewarded and nonrewarded video players
                ramp.showRewardedVideo({
                    userId: getCurrentUserId(),
                    code: pwVideoCode,
                    callback: (response) =>
                    {
                        isVideoAdPlaying = false;

                        ramp.closeRewardedVideo();

                        //skip so as not to reward the user
                        interstitialSkipped();
                    }
                });
            }
            else
            {
                isVideoAdPlaying = false;

                interstitialError();
            }

        }).catch((error) =>
        {
            isVideoAdPlaying = false;

            var key = `getPlaywireRewardedVideoCodeNew_NonRewarded_${Date.now()}`;

            SendDataToUnity("OnFunctionError", key, error.message);
        });
    }
}

const boltRewardedVideoPlayerId = "tyche_precontent_player";

function tryInitRewardedInterstitial(audioOn)
{
    if(!window.adblockDetected)
    {
        if(rampVideoPlayerInitialised())
        {
            window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
        }
        else
        {
            //poll until video player is ready
            const checkVideoPlayerInterval = setInterval(() => {
                //player isnt ready => do nothing
                if (!rampVideoPlayerInitialised())
                    return;

                //player is ready => stop polling and send message to unity
                clearInterval(checkVideoPlayerInterval);
                window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
            }, 1000);
        }
    }
}

function tryShowRewardedInterstitial(audioOn)
{
    if(!rampVideoPlayerInitialised())
        return;

    if (!isVideoAdPlaying && firebase.auth().currentUser != null)
    {
        isVideoAdPlaying = true;

        var functionRef = firebase.functions().httpsCallable("getPlaywireRewardedVideoCodeNew");

        functionRef(null).then((response) =>
        {
            var pwVideoCode = response.data.code;

            if (pwVideoCode !== undefined)
            {
                interstitialStart();

                setRewardedVideoMsgBoxEnabled(true);

                ramp.showRewardedVideo({
                    userId: getCurrentUserId(),
                    code: pwVideoCode,
                    callback: (response) =>
                    {
                        isVideoAdPlaying = false;

                        ramp.closeRewardedVideo();

                        //patch fix: removed check for rewardUser as it wasnt been set when displaying static fallback ads when rewarded video fill was unavailable 
                        //also it isnt neede as we only use this call for rewarded videos
                        //if(response.adPlayed && response.rewardUser) 
                        if(response.adPlayed)
                        {
                            interstitialComplete();
                        }
                        else
                        {
                            interstitialSkipped();
                        }
                    }
                });
            }
            else
            {
                isVideoAdPlaying = false;

                interstitialError();
            }

        }).catch((error) =>
        {
            isVideoAdPlaying = false;

            interstitialError();

            var key = `getPlaywireRewardedVideoCodeNew_${Date.now()}`;

            SendDataToUnity("OnFunctionError", key, error.message);
        });
    }
}

const rewardedVideoMsgBoxId = "tyche_msg_box";
var rewardedVideoMsgBox;

function setRewardedVideoMsgBoxEnabled(enabled)
{
    if(rewardedVideoMsgBox == null)
    {
        rewardedVideoMsgBox = document.getElementById(rewardedVideoMsgBoxId);
    }

    if(rewardedVideoMsgBox !== null && rewardedVideoMsgBox.style !== null)
    {
        rewardedVideoMsgBox.style.display = enabled ? "block" : "none";
    }
}

function addNonRewardedVideoStylingObserver()
{
    const targetNode = document.getElementById('ramp_rewarded_container');

    const boxconfig = { attributes: true, childList: true, subtree: true };

    const callback = function (mutationList, observer)
    {
        for (const mutation of mutationList)
        {
            mutation.addedNodes.forEach(addedNode =>
            {
                var styleNode = document.querySelector('#tyche_msg_box + div')
                if (styleNode.style.height)
                {
                    styleNode.style = 'width: 100%; height: 100vh; border: 4px solid rgba(255, 255, 255, 0.2); box-sizing: border-box;'
                }
            })
        }
    };

    const msgBoxObserver = new MutationObserver(callback);
    msgBoxObserver.observe(targetNode, boxconfig);
}
