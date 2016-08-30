var element = document.createElement('link');
element.setAttribute('rel', 'stylesheet');
element.setAttribute('type', 'text/css');
element.setAttribute('href', 'https://s3-us-west-2.amazonaws.com/static.masterclass.com/optimizely-tests/video-carousel/main.css');
document.getElementsByTagName('head')[0].appendChild(element);
window.MC = window.MC || {};
window.MC.videoCarousel = {
  ATTRS_ARRAY: [
    {
      id: 'uijym1gexz',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/446a52bc8a7814b33ca8833adbe050e594831604.jpg?image_crop_resized=300x220',
      title: 'Character Intro'
    },
    {
      id: 'nlv3phbo9y',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/d5a19e21b222e51424228d40c411c7b30a6f0386.jpg?image_crop_resized=300x220',
      title: 'First 15 Pages'
    },
    {
      id: '2o1eb9bgbs',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/eefdddb24f17bbfcff215841479f7ea3f481afa7.jpg?image_crop_resized=300x220',
      title: 'Leading the Audience'
    },
    {
      id: '5jodpnn4x2',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/8f6945871f55844577d62b044c45541e55306d35.jpg?image_crop_resized=300x220',
      title: 'Intention and Obstacle'
    }
  ],
  currentVideoIndex: 0,
  updateVideoIndexCounter: function(idx) {
    if(idx === undefined || idx === null) {
      MC.videoCarousel.currentVideoIndex++;
      MC.videoCarousel.currentVideoIndex = MC.videoCarousel.currentVideoIndex % 4;
    } else {
      MC.videoCarousel.currentVideoIndex = idx;
    }
    return MC.videoCarousel.currentVideoIndex;
  },

  isOnline: function() {
    return navigator.onLine;
  },

  advanceVideo: function(idx) {
    // idx may be undefined or null and it will simply increment
    var vidIndex = MC.videoCarousel.updateVideoIndexCounter(idx)
    var hashedId = MC.videoCarousel.ATTRS_ARRAY[vidIndex].id;
    if (MC.videoCarousel.isOnline()) {
      MC.videoCarousel.videoPlayer.replaceWith(hashedId, { transition: 'fade' });
      MC.videoCarousel.videoPlayer.play();
      $('body').trigger('mcVideoCarouselAdvanced', { currentVideo: { videoIndex: vidIndex, hashedId: hashedId}});
      return MC.videoCarousel.videoPlayer;
    } else {
      $('body').trigger('mcVideoCarouselAdvanced', { currentVideo: { videoIndex: vidIndex, hashedId: hashedId}});
    }
  },

  endVideoHandler: function() {
    MC.videoCarousel.advanceVideo();
  },

  ready: function() {
    var SELECTORS, carouselHtml, thumbHtml, modalHtml;
    var getWindowCenter, getContainerCenter;

    getWindowCenter = function() {
      return $(window).width() / 2;
    };

    getContainerCenter = function($el) {
      var el, rectCoords;
      el = $el[0]
      rectCoords = el.getBoundingClientRect();
      return (rectCoords.right - rectCoords.left) / 2;
    };

    SELECTORS = {
      CLASSES: {
        ACTIVE: 'active'
      },

      DATA_ATTRS: {
        VIDEO_THUMB: '[data-video-thumb=\'true\']',
        MAIN_VIDEO_TITLE: '[data-main-video-title=\'true\']',
        TITLE: 'title'
      },

      TEXT: {
        CURRENT_VIDEO: 'NOW PLAYING'
      }
    };

    MC.videoCarousel.videoPlayers = [];


    window._wq.push({ '_all': function(videoPlayer) {
      //if (MC.videoCarousel.videoPlayer === null || MC.videoCarousel.videoPlayer === undefined) {
        //MC.optimizelyVideoPlayer = videoPlayer;
        //MC.videoCarousel.videoPlayer = videoPlayer;
      //}
      //MC.optimizelyVideoPlayer.bind('end', MC.videoCarousel.endVideoHandler);
      //$('body').trigger('mcVideoCarouselVideoLoaded', { currentVideo: { videoIndex: 0, hashedId: videoPlayer.hashedId() }});
    }});

    window._wq.push(
        { 'uijym1gexz': function(videoPlayer) {
          if (MC.videoCarousel.videoPlayer === null || MC.videoCarousel.videoPlayer === undefined) {
            MC.optimizelyVideoPlayer = videoPlayer;
            MC.videoCarousel.videoPlayer = videoPlayer;
          }
          var obj = { 'id': 'uijym1gexz', videoPlayer: videoPlayer };
          MC.videoCarousel.videoPlayers.push(obj);
          videoPlayer.bind('end', MC.videoCarousel.endVideoHandler)
          $('body').trigger('mcVideoCarouselVideoLoaded', { currentVideo: { videoIndex: 0, hashedId: videoPlayer.hashedId() }});
        }
    });



    modalHtml = '\
                 <div class=\'modal fade\' id=\'videoModal\' tabindex=\'-1\' role=\'dialog\' aria-labelledby=\'videoModalLabel\'>\
                   <div class=\'modal-dialog\' role=\'document\'>\
                     <div class=\'\'>\
                       <div class=\'modal-header\'>\
                         <div class=\'container\'>\
                           <div class=\'row\'>\
                             <div class=\'col-xs-12\'>\
                               <h3 class=\'section-title\'>CLASS PREVIEW</h3>\
                             </div><!-- col-xs-12 -->\
                           </div><!-- row -->\
                         </div><!-- container -->\
                       </div><!-- modal-header -->\
                       <div class=\'modal-body\'>\
                         <div class=\'container\'>\
                           <div class=\'row video-container\'>\
                             <div class=\'col-xs-10 col-xs-offset-1\'>\
                               <div class=\'row\'>\
                                 <div class=\'col-xs-12\'>\
                                   <script charset=\'ISO-8859-1\' src=\'//fast.wistia.com/assets/external/E-v1.js\' async></script>\
                                   <div class=\'wistia_embed wistia_async_uijym1gexz playlistLinks=auto videoFoam=true\' style=\'height:360px;width:640px\'>&nbsp;</div>\
                                 </div><!-- col-xs-12 -->\
                                 <div class=\'col-xs-8\'>\
                                   <h3 data-main-video-title=\'true\'>INTRODUCTION - FOCUS AND DESIRE</h3>\
                                 </div><!-- col-xs-12 -->\
                                 <div class=\'col-xs-4\'>\
                                   <button href=\'#\' class=\'cta-button right\'>take the class</button>\
                                 </div><!-- col-xs-6 -->\
                                 <div class=\'col-xs-12\'>\
                                   <hr></hr>\
                                 </div><!-- col-xs-12 -->\
                               </div><!-- row -->\
                             </div><!-- end col-xs-10 -->\
                           </div><!-- video-container -->\
                         </div><!-- container -->\
                       </div><!-- modal-body-->\
                     </div><!-- -->\
                   </div><!-- modal-dialog -->\
                 </div><!-- modal fade -->\
                 ';
    // Add the modal to the page
    var $target = $('#target-div');
    if ($target.length > 0) {
      $('#target-div').append(modalHtml);
    } else {
      $('body').append(modalHtml);
    }

    carouselHtml = '\
                    <div class=\'video-carousel container\' id=\'vid-2\'> \
                      <div class=\'video-thumbs-container\'></div> \
                    </div> \
                    ';
    // Append the carousel wrapper to the page
    $('#videoModal .modal-body').append(carouselHtml);
    thumbHtml = '\
                <div class=\'video-image-thumb-wrapper\' data-video-thumb=\'true\'></div>\
                ';


    // Populate the carousel wrappers with images
    for(var j = 0; j < MC.videoCarousel.ATTRS_ARRAY.length; j++) {
      var obj, img, tHtml, $img, $tHtml, $replaceLink;
      obj = MC.videoCarousel.ATTRS_ARRAY[j];
      img = new Image;

      img.src = obj.thumbUrl;
      $img = $(img);
      tHtml = thumbHtml;
      $tHtml = $(thumbHtml);
      $tHtml.data('title', obj.title);
      $tHtml.data('hashed-id', obj.id);
      $tHtml.data('video-index', j);
      $tHtml.append($img);
      $tHtml.append('<p>'+obj.title+'</p>');
      $('.video-thumbs-container', '#vid-2').append($tHtml);
      $tHtml.data('title')
    }

    $('body').on('mcVideoCarouselAdvanced', function(e, obj) {
      var $currentEl;
      $currentEl =$($(SELECTORS.DATA_ATTRS.VIDEO_THUMB)[obj.currentVideo.videoIndex]);
      updateUIForCurrentVideo($currentEl);
    });

    var clearActiveClasses = function($currentEl, evt) {
      var $siblings;
      $siblings = $currentEl.siblings();
      $siblings.removeClass(SELECTORS.CLASSES.ACTIVE);
    };

    var updateThumbTitles = function($currentEl, evt) {
      var i, $siblings, $el;
      /* Loop through all other videos and set their text to the
       *  data-attribute title
      */
      $siblings = $currentEl.siblings();
      for(i=0; i < $siblings.length; i++) {
        $el = $($siblings[i]);
        $('p', $el).text($el.data(SELECTORS.DATA_ATTRS.TITLE))
      }
    };

    var updateActiveThumb = function($currentEl, evt) {
      var currentTitle;
      currentTitle = $currentEl.data(SELECTORS.DATA_ATTRS.TITLE)
      $currentEl.addClass(SELECTORS.CLASSES.ACTIVE);
      $('p', $currentEl).text(SELECTORS.TEXT.CURRENT_VIDEO);
      $(SELECTORS.DATA_ATTRS.MAIN_VIDEO_TITLE).text(currentTitle);
    };

    var updateUIForCurrentVideo = function($currentEl, evt) {
      // Check if this a jquery element if it is then you don't have
      // to do anything if it is an object check to make sure that it has a currentVideo
      // object then grab index and find the element that corresponds to the index
      clearActiveClasses($currentEl, evt);
      updateThumbTitles($currentEl, evt);
      updateActiveThumb($currentEl, evt);
    };

    /* Handle the click event for the thumbnail*/
    $(SELECTORS.DATA_ATTRS.VIDEO_THUMB).on('click', function(e) {
      var $this = $(this);
      MC.videoCarousel.advanceVideo($this.data('video-index'));
    });

    updateUIForCurrentVideo($($(SELECTORS.DATA_ATTRS.VIDEO_THUMB)[0]));
  },
};

window._wq = window._wq || [];
_wq.push({ '_all': {
  videoFoam: true,
  playerColor: 'ff0000',
}});

$(document).ready(MC.videoCarousel.ready);
