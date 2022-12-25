'use strict';

//inject bait script
var baitScript = document.createElement('script');
baitScript.setAttribute('src','scripts/banger.js');
baitScript.async = false;
document.head.appendChild(baitScript);

//globals
const divIdMainMenuBanner = "adContainerMainMenu";
const divIdWinCeremonyBanner = "adContainerWin";
const divIdDeathBanner = "adContainerDeath";

const testBaitDelay = 1000;
var adblockDetectedType;
var pendingAdblockDetectedMessage;

function createAdBlockBaitDiv(divId, classList)
{
  var div = document.getElementById(divId);

  if(div == null)
  {
    div = document.createElement("div");

    div.id = divId;

    if(classList != null)
    {
      div.classList.add(classList);

    }

    div.style.display = "block";
    div.style.backgroundColor = 'transparent';
    div.style.height = '10px';
    div.style.width = '10px';
    div.style.position = 'fixed';
    div.style.bottom = '-100px';
    div.style.left = '-100px';

    div.innerHTML = '&nbsp;';

    document.body.appendChild(div);
  }

  return div;
}

function wasAdBlockDivRemoved(div)
{
  return getComputedStyle(div).display === "none" || div.getBoundingClientRect().height === 0;
}

function onUpdateAdBlockDetectedComplete(detectionType)
{
  if(!window.adblockDetected)
  {
    adblockDetectedType = detectionType;
  
    window.adblockDetected = (detectionType != null);
  
    if(window.adblockDetected)
    {
      console.log(`Adblock detected: ${detectionType}`);
    }
  
    pendingAdblockDetectedMessage = true;
    trySendAdBlockDetectedMessage();
  }
}

function trySendAdBlockDetectedMessage()
{
  if(window.unityGame != null && pendingAdblockDetectedMessage)
  {
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnUpdateAdBlockDetectedComplete", adblockDetectedType != null ? adblockDetectedType : "");

    pendingAdblockDetectedMessage = false;
  }
}

function updateAdBlockDetected()
{
  if(window.adblockDetected)
    return;

  var imgUrlTestPassed = false;
  var fbDivTestPassed = false;

  //nested function
  function checkAllAsyncTestsComplete()
  {
    if(imgUrlTestPassed && fbDivTestPassed)
    {
      onUpdateAdBlockDetectedComplete(null);
    }
  }

  //test local div ad bait
  var localAdBlockDiv = createAdBlockBaitDiv("AdBanner", ['adLeaderboard', 'adBanner', 'leaderboard_ad']);

  //delay testing bait divs to let adblockers do their thing
  setTimeout(() => 
  {
    //test local script bait
    if(document.getElementById('sklocalscriptbait') == null)
    {
      onUpdateAdBlockDetectedComplete("Local Script");
      return;
    }

    //test local div bait
    if(wasAdBlockDivRemoved(localAdBlockDiv))
    {
      onUpdateAdBlockDetectedComplete("Local Div");
      return;
    }

    //test image pixel ad bait detection
    var img = new Image();

    img.onload = () =>
    {
      imgUrlTestPassed = true;
      checkAllAsyncTestsComplete();
    }

    img.onerror = () =>
    {
      onUpdateAdBlockDetectedComplete("Img Url Test");
      return;
    };

    img.src = 'https://px.moatads.com/pixel.gif';
    
    //test bait divs from firebase ids
    if (typeof firebase !== 'undefined' && firebase.database() != null && firebase.auth() != null)
    {
      try
      {
        const dbRef = firebase.database().ref();

        dbRef.child("adblock").once("value").then((snapshot) =>
        {
          if (snapshot.exists())
          {
            var adblockDivIds = snapshot.val();

            if(Array.isArray(adblockDivIds))
            {
              var adblockDivs = [];

              adblockDivIds.forEach(divId =>
              {
                const div = createAdBlockBaitDiv(divId);
                adblockDivs.push(div);
              });

              //delay testing bait divs to let adblockers do their thing
              setTimeout(() =>
              {
                //check bait divs
                for (let i = 0; i < adblockDivs.length; i++)
                {
                  const div = adblockDivs[i];

                  if(wasAdBlockDivRemoved(div))
                  {
                    onUpdateAdBlockDetectedComplete("Firebase Div");
                    return;
                  }
                }

                fbDivTestPassed = true;
                checkAllAsyncTestsComplete();
              }, testBaitDelay);
            }
          }
        });
      }
      catch(e)
      {
        console.log(`updateAdBlockDetected error: ${e}`);
      }
    }
  }, testBaitDelay);
}

function setElementSize(identifier, x, y, w, h)
{
  const el = document.getElementById(identifier);
  if(el != null)
  {
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.width = w + "px";
    el.style.height = h + "px";
  }
}

function hideAdContainer(adElementId)
{
  const ad = document.getElementById(adElementId);

  if(ad != null)
  {
    ad.style.display = "none";
  }
}

function showAdContainer(adElementId)
{
  const ad = document.getElementById(adElementId);

  if(ad != null)
  {
    ad.style.position = "absolute";
    ad.style.display = getComputedStyle(ad).getPropertyValue("--shown_display");
  }
}

function hideMainMenuBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdMainMenuBanner);
    destroyMainMenuAd();
  }
}

function showMainMenuBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideWinCeremonyBanner();
    hideLongBanner();

    showAdContainer(divIdMainMenuBanner);
    //updateAdSizes();
    requestMainMenuAd();
  }
}

function hideWinCeremonyBanner()
{
  if(!offCanvasAdsEnabled)
  {
    hideAdContainer(divIdWinCeremonyBanner);
    destroyWinCeremonyAd();
  }
}

function showWinCeremonyBanner(interstialRequested)
{
  if(!offCanvasAdsEnabled)
  {
    hideLongBanner();
    hideMainMenuBanner();

    showAdContainer(divIdWinCeremonyBanner);
    //updateAdSizes();
    requestWinCeremonyAd(interstialRequested);
  }
}

function hideLongBanner()
{
  if(offCanvasAdsEnabled)
  {
    if(onlyShowOffCanvasAdsOnDeath)
    {
      hideBtmAdContainer();
      hideRightAdContainer();
      updateGameCanvasSize();
    }
    else if(!showBtmAd)
    {
      //not showing off canvas btm ad so destroy standard on canvas death banner
      hideAdContainer(divIdDeathBanner);
      destroyDeathAd();  
    }
  }
  else
  {
    hideAdContainer(divIdDeathBanner);
    destroyDeathAd();
  }
}

function showLongBanner()
{
  if(offCanvasAdsEnabled)
  {
    if(onlyShowOffCanvasAdsOnDeath)
    {
      if(showBtmAd)
      {
        updateBtmAdContainer();
      }

      if(showRightAd)
      {
        updateRightAdContainer();
      }

      updateGameCanvasSize();
    }
    else if(!showBtmAd)
    {
      //not showing off canvas btm ad so show standard on canvas death banner
      hideWinCeremonyBanner();
      hideMainMenuBanner();

      showAdContainer(divIdDeathBanner);
      //updateAdSizes();
      requestDeathAd();  
    }
  }
  else
  {
    hideWinCeremonyBanner();
    hideMainMenuBanner();
  
    showAdContainer(divIdDeathBanner);
    //updateAdSizes();
    requestDeathAd();
  }
}

function showPreGameInterstitial(audioOn)
{
  showInterstitial(audioOn, 'start', 'pregame');
}

function showWinCeremonyInterstitial(audioOn)
{
  showInterstitial(audioOn, 'next', 'winceremony')
}

function interstitialStart()
{
  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialStart");

  if(offCanvasAdsEnabled)
  {
    hideAllOffCanvasAds();
  }
}

function interstitialError()
{
  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialFailed");

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function interstitialSkipped()
{
  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialSkipped");

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}

function interstitialComplete()
{
  window.unityGame.SendMessage(unityFirebaseGameOjbectName, "InterstitialComplete");

  if(offCanvasAdsEnabled)
  {
    refreshAllOffCanvasAds();
  }
}
