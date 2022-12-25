'use strict';

function displayingBtmAd()
{
  return currBtmAdIndex >= 0;
}

function displayingRightAd()
{
  return currRightAdIndex >= 0;
}

function sortAdResArrays()
{
  btmAdResolutions.sort(sortRightAdResArrays);
  rightAdResolutions.sort(sortBtmAdResArrays);
  btmAdResolutionsMobile.sort(sortRightAdResArrays);
  rightAdResolutionsMobile.sort(sortBtmAdResArrays);
}

function sortBtmAdResArrays(adResObj1, adResObj2)
{
  if(adResObj1.w === adResObj2.w)
  {
    if(adResObj1.h === adResObj2.h)
    {
      return 0;
    }
    else if(adResObj1.h > adResObj2.h)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  }
  else if(adResObj1.w > adResObj2.w)
  {
    return -1;
  }
  else
  {
    return 1;
  }
}

function sortRightAdResArrays(adResObj1, adResObj2)
{
  if(adResObj1.h === adResObj2.h)
  {
    if(adResObj1.w === adResObj2.w)
    {
      return 0;
    }
    else if(adResObj1.w > adResObj2.w)
    {
      return -1;
    }
    else
    {
      return 1;
    }
  }
  else if(adResObj1.h > adResObj2.h)
  {
    return -1;
  }
  else
  {
    return 1;
  }
}

function updateOffCanvasAdContainers()
{
  if(onlyShowOffCanvasAdsOnDeath)
  {
    if(displayingBtmAd())
    {
      updateBtmAdContainer();
    }
    else
    {
      hideBtmAdContainer();
    }

    if(displayingRightAd())
    {
      updateRightAdContainer();
    }
    else
    {
      hideRightAdContainer();
    }
  }
  else
  {
    updateBtmAdContainer();
    updateRightAdContainer();
  }
}

function updateOffCanvasBorderCorner()
{
  //border corner
  if(displayingBtmAd() && displayingRightAd())
  {
    gameContainer.style.borderBottomRightRadius = offCanvasBorderBtmRightCornerRadiusStyle;
  }
  else
  {
    gameContainer.style.borderBottomRightRadius = "0px";
  }
}

function updateBtmAdContainer()
{
  if (offCanvasAdsEnabled && showBtmAd)
  {
    //padding
    //main container
    var mainContainerStyle = getComputedStyle(mainContainer);
    var mainContainerPadLeft = parseInt(mainContainerStyle.getPropertyValue("padding-left"));
    var mainContainerPadRight = parseInt(mainContainerStyle.getPropertyValue("padding-right"));
    var mainContainerPadTop = parseInt(mainContainerStyle.getPropertyValue("padding-top"));
    var mainContainerPadBtm = parseInt(mainContainerStyle.getPropertyValue("padding-bottom"));

    //ad container
    var btmAdContainerStyle = getComputedStyle(btmAdContainer);
    var btmAdContainerPadLeft = parseInt(btmAdContainerStyle.getPropertyValue("padding-left"));
    var btmAdContainerPadRight = parseInt(btmAdContainerStyle.getPropertyValue("padding-right"));
    var btmAdContainerPadTop = parseInt(btmAdContainerStyle.getPropertyValue("padding-top"));
    var btmAdContainerPadBtm = parseInt(btmAdContainerStyle.getPropertyValue("padding-bottom"));

    //calc max ad sizes
    var maxAdWidth = window.innerWidth - mainContainerPadLeft - mainContainerPadRight - btmAdContainerPadLeft - btmAdContainerPadRight - rightAdContainer.getBoundingClientRect().width;
    var maxAdHeight = (window.innerHeight * maxAdHeightPercentage) - mainContainerPadTop - mainContainerPadBtm - btmAdContainerPadTop - btmAdContainerPadBtm;

    //calc best ad size
    var bestAdWidth = 0;
    var bestAdHeight = 0;

    var tempBtmAdIndex = -1;
    var btmAdResArray = isMobile() ? btmAdResolutionsMobile : btmAdResolutions;

    for (let i = 0; i < btmAdResArray.length; i++)
    {
      const adRes = btmAdResArray[i];

      const adWidth = adRes.w;
      const adHeight = adRes.h;

      if (adHeight <= maxAdHeight && adHeight >= bestAdHeight && adWidth <= maxAdWidth && adWidth >= bestAdWidth)
      {
        tempBtmAdIndex = i;

        bestAdWidth = adWidth;
        bestAdHeight = adHeight;
      }
    }

    // console.log(`windowWidth: ${window.innerWidth} maxAdWidth: ${maxAdWidth} closestAdWidth: ${closestAdWidth}`); 

    if (tempBtmAdIndex >= 0)
    {
      gameContainer.style.borderBottom = offCanvasBorderStyle;

      var containerHeight = bestAdHeight + btmAdContainerPadTop + btmAdContainerPadBtm + "px";
      btmAdContainer.style.display = "flex";
      btmAdContainer.style.minHeight = containerHeight;
      btmAdContainer.style.height = containerHeight;

      btmAdPlaceholder.style.display = "flex";
      btmAdPlaceholder.style.width = bestAdWidth + "px";
      btmAdPlaceholder.style.height = bestAdHeight + "px";

      if(debugAdContainers)
      {
        btmAdResText.style.display = "block";
        btmAdResText.innerHTML = `${bestAdWidth}x${bestAdHeight}`;
      }
      else
      {
        btmAdResText.style.display = "none";
      }

      //if we arent already showing an ad then request one
      if(currBtmAdIndex != tempBtmAdIndex)
      {
        currBtmAdIndex = tempBtmAdIndex;

        const adTagIdToShow = btmAdResArray[currBtmAdIndex].adId;

        requestOffCanvasAd(btmAdResArray, adTagIdToShow);
      }
    }
    else
    {
      hideBtmAdContainer();
    }
  }
  else
  {
    hideBtmAdContainer();
  }
}

function hideBtmAdContainer()
{
  gameContainer.style.borderBottom = "0px";

  btmAdContainer.style.display = "none";
  btmAdPlaceholder.style.display = "none";
  btmAdResText.style.display = "none";

  hideOffCanvasAds(btmAdResolutions);
  hideOffCanvasAds(btmAdResolutionsMobile);

  currBtmAdIndex = -1;
}

function updateRightAdContainer()
{
  if (offCanvasAdsEnabled && showRightAd)
  {
    //padding
    //main container
    var mainContainerStyle = getComputedStyle(mainContainer);
    var mainContainerPadLeft = parseInt(mainContainerStyle.getPropertyValue("padding-left"));
    var mainContainerPadRight = parseInt(mainContainerStyle.getPropertyValue("padding-right"));
    var mainContainerPadTop = parseInt(mainContainerStyle.getPropertyValue("padding-top"));
    var mainContainerPadBtm = parseInt(mainContainerStyle.getPropertyValue("padding-bottom"));

    //ad container
    var rightAdContainerStyle = getComputedStyle(rightAdContainer);
    var rightAdContainerPadLeft = parseInt(rightAdContainerStyle.getPropertyValue("padding-left"));
    var rightAdContainerPadRight = parseInt(rightAdContainerStyle.getPropertyValue("padding-right"));
    var rightAdContainerPadTop = parseInt(rightAdContainerStyle.getPropertyValue("padding-top"));
    var rightAdContainerPadBtm = parseInt(rightAdContainerStyle.getPropertyValue("padding-bottom"));

    //calc max ad sizes
    var maxAdWidth = (window.innerWidth * maxAdWidthPercentage) - mainContainerPadLeft - mainContainerPadRight - rightAdContainerPadLeft - rightAdContainerPadRight;
    var maxAdHeight = window.innerHeight - mainContainerPadTop - mainContainerPadBtm - rightAdContainerPadTop - rightAdContainerPadBtm;

    //calc closest ad width
    var bestAdWidth = 0;
    var bestAdHeight = 0;

    var tempRightAdIndex = -1;
    var rightAdResArray = isMobile() ? rightAdResolutionsMobile : rightAdResolutions;

    for (let i = 0; i < rightAdResArray.length; i++)
    {
      const adRes = rightAdResArray[i];

      const adWidth = adRes.w;
      const adHeight = adRes.h;

      if (adWidth <= maxAdWidth && adWidth >= bestAdWidth && adHeight <= maxAdHeight && adHeight >= bestAdHeight)
      {
        tempRightAdIndex = i;

        bestAdWidth = adWidth;
        bestAdHeight = adHeight;
      }
    }

    // console.log(`windowHeight: ${window.innerHeight} maxAdHeight: ${maxAdHeight} closestAdHeight: ${closestAdHeight}`);

    //set ad container sizes
    if (tempRightAdIndex >= 0)
    {
      gameContainer.style.borderRight = offCanvasBorderStyle;

      var containerWidth = bestAdWidth + rightAdContainerPadLeft + rightAdContainerPadRight + "px";
      rightAdContainer.style.display = "flex";
      rightAdContainer.style.minWidth = containerWidth;
      rightAdContainer.style.width = containerWidth;

      rightAdPlaceholder.style.display = "flex";
      rightAdPlaceholder.style.width = bestAdWidth + "px";
      rightAdPlaceholder.style.height = bestAdHeight + "px";

      if(debugAdContainers)
      {
        rightAdResText.style.display = "block";
        rightAdResText.innerHTML = `${bestAdWidth}x${bestAdHeight}`;
      }
      else
      {
        //rightAdPlaceholder.style.display = "none";
        rightAdResText.style.display = "none";
      }

      //if we arent already showing an ad then request one
      if(currRightAdIndex != tempRightAdIndex)
      {
        currRightAdIndex = tempRightAdIndex;

        const adTagIdToShow = rightAdResArray[currRightAdIndex].adId;

        requestOffCanvasAd(rightAdResArray, adTagIdToShow);
      }
    }
    else
    {
      hideRightAdContainer();
    }
  }
  else
  {
    hideRightAdContainer();
  }
}

function hideRightAdContainer()
{
  gameContainer.style.borderRight = "0px";

  rightAdContainer.style.display = "none";
  rightAdPlaceholder.style.display = "none";
  rightAdResText.style.display = "none";

  hideOffCanvasAds(rightAdResolutions);
  hideOffCanvasAds(rightAdResolutionsMobile);

  currRightAdIndex = -1;
}

function hideAllOffCanvasAds()
{
  //bottom
  hideOffCanvasAds(btmAdResolutions);
  hideOffCanvasAds(btmAdResolutionsMobile);
  currBtmAdIndex = -1;

  //right
  hideOffCanvasAds(rightAdResolutions);
  hideOffCanvasAds(rightAdResolutionsMobile);
  currRightAdIndex = -1;
}

function refreshAllOffCanvasAds()
{
  updateOffCanvasAdContainers();
}

function updateAdBlockerContainer()
{
  if(!window.adblockDetected)
  {
    document.getElementById("btmAdBlockerContainer").style.display = "none";
    document.getElementById("rightAdBlockerContainer").style.display = "none";
  }
}

function createOffCanvasAdDivs()
{
  //bottom
  var btmAdResArray = isMobile() ? btmAdResolutionsMobile : btmAdResolutions;

  btmAdResArray.forEach(btmAdRes => {
    var adDiv = document.createElement("div");
    adDiv.id = btmAdRes.adId;

    if(setOffCanvasAdDivDimensions)
    {
      adDiv.style.width = btmAdRes.w + "px";
      adDiv.style.height = btmAdRes.h + "px";
    }

    btmAdPlaceholder.appendChild(adDiv);
  });

  //right
  var rightAdResArray = isMobile() ? rightAdResolutionsMobile : rightAdResolutions;

  rightAdResArray.forEach(rightAdRes => {
    var adDiv = document.createElement("div");
    adDiv.id = rightAdRes.adId;

    if(setOffCanvasAdDivDimensions)
    {
      adDiv.style.width = rightAdRes.w + "px";
      adDiv.style.height = rightAdRes.h + "px";
    }

    rightAdPlaceholder.appendChild(adDiv);
  });
}

function offCanvasAdsOnLoad()
{  
  createOffCanvasAdDivs();
  resizeOffCanvasAdContainers();
  updateAdBlockerContainer();
}

function offCanvasAdsOnResize()
{
  resizeOffCanvasAdContainers();
}

function resizeOffCanvasAdContainers()
{
  updateOffCanvasAdContainers();
  updateOffCanvasBorderCorner();
}

sortAdResArrays();

window.addEventListener("load", offCanvasAdsOnLoad);
window.addEventListener("resize", offCanvasAdsOnResize);


// //CHEAT KEYS
// function handleCheatKey(keyboardEvent)
// {
// 	var key = keyboardEvent.key;

// 	if (key == "b" || key == "B")
// 	{
// 		//Toggle bottom ad
// 		showBtmAd = !showBtmAd;

// 		resizeContainers();

// 		console.log(`Toggle showBtmAd: ${showBtmAd}`);
// 	}
// 	else if (key == "r" || key == "R")
// 	{
// 		//Toggle right ad
// 		showRightAd = !showRightAd;

// 		resizeContainers();

// 		console.log(`Toggle showRightAd: ${showRightAd}`);
// 	}
// 	else if (key == "=")
// 	{
// 		cheatCyclePadding(true);

// 		console.log("Inc padding");
// 	}
// 	else if (key == "-")
// 	{
// 		cheatCyclePadding(false);

// 		console.log("Dec padding");
// 	}
// 	else if (key == "x" || key == "X")
// 	{
// 		onlyShowOffCanvasAdsOnDeath = !onlyShowOffCanvasAdsOnDeath;

// 		if(onlyShowOffCanvasAdsOnDeath)
// 		{
// 			currRightAdIndex = -1;
// 			currBtmAdIndex = -1;
// 		}

// 		resizeContainers();

// 		console.log(`Toggle onlyShowOffCanvasAdsOnDeath: ${onlyShowOffCanvasAdsOnDeath}`);
// 	}
// }

// window.addEventListener("keypress", handleCheatKey)

// function cheatCyclePadding(increasePadding)
// {
// 	const maxPadding = 150;
// 	const paddingInc = 10;

// 	//bottom padding
// 	var btmAdContainerStyle = getComputedStyle(btmAdContainer);
// 	var btmAdContainerPadLeft = parseInt(btmAdContainerStyle.getPropertyValue("padding-left"));
// 	var btmAdContainerPadRight = parseInt(btmAdContainerStyle.getPropertyValue("padding-right"));
// 	var btmAdContainerPadTop = parseInt(btmAdContainerStyle.getPropertyValue("padding-top"));
// 	var btmAdContainerPadBtm = parseInt(btmAdContainerStyle.getPropertyValue("padding-bottom"));

// 	//right padding
// 	var rightAdContainerStyle = getComputedStyle(rightAdContainer);
// 	var rightAdContainerPadLeft = parseInt(rightAdContainerStyle.getPropertyValue("padding-left"));
// 	var rightAdContainerPadRight = parseInt(rightAdContainerStyle.getPropertyValue("padding-right"));
// 	var rightAdContainerPadTop = parseInt(rightAdContainerStyle.getPropertyValue("padding-top"));
// 	var rightAdContainerPadBtm = parseInt(rightAdContainerStyle.getPropertyValue("padding-bottom"));

// 	if(increasePadding)
// 	{
// 		//btm
// 		btmAdContainer.style.paddingLeft = Math.min(btmAdContainerPadLeft + paddingInc, maxPadding) + "px";
// 		btmAdContainer.style.paddingRight = Math.min(btmAdContainerPadRight + paddingInc, maxPadding) + "px";
// 		btmAdContainer.style.paddingTop = Math.min(btmAdContainerPadTop + paddingInc, maxPadding) + "px";
// 		btmAdContainer.style.paddingBottom = Math.min(btmAdContainerPadBtm + paddingInc, maxPadding) + "px";

// 		//right
// 		rightAdContainer.style.paddingLeft = Math.min(rightAdContainerPadLeft + paddingInc, maxPadding) + "px";
// 		rightAdContainer.style.paddingRight = Math.min(rightAdContainerPadRight + paddingInc, maxPadding) + "px";
// 		rightAdContainer.style.paddingTop = Math.min(rightAdContainerPadTop + paddingInc, maxPadding) + "px";
// 		rightAdContainer.style.paddingBottom = Math.min(rightAdContainerPadBtm + paddingInc, maxPadding) + "px";
// 	}
// 	else
// 	{
// 		//btm
// 		btmAdContainer.style.paddingLeft = Math.max(btmAdContainerPadLeft - paddingInc, 0) + "px";
// 		btmAdContainer.style.paddingRight = Math.max(btmAdContainerPadRight - paddingInc, 0) + "px";
// 		btmAdContainer.style.paddingTop = Math.max(btmAdContainerPadTop - paddingInc, 0) + "px";
// 		btmAdContainer.style.paddingBottom = Math.max(btmAdContainerPadBtm - paddingInc, 0) + "px";

// 		//right
// 		rightAdContainer.style.paddingLeft = Math.max(rightAdContainerPadLeft - paddingInc, 0) + "px";
// 		rightAdContainer.style.paddingRight = Math.max(rightAdContainerPadRight - paddingInc, 0) + "px";
// 		rightAdContainer.style.paddingTop = Math.max(rightAdContainerPadTop - paddingInc, 0) + "px";
// 		rightAdContainer.style.paddingBottom = Math.max(rightAdContainerPadBtm - paddingInc, 0) + "px";
// 	}

// 	resizeContainers();
// }
