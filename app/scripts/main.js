var ss = document.createElement('link');
ss.type = 'text/css';
ss.rel = 'stylesheet';
ss.href = 'https://s3-us-west-2.amazonaws.com/static.masterclass.com/optimizely-tests/video-carousel/main.css';
//ss.href= '../styles/main.css'
document.getElementsByTagName('head')[0].appendChild(ss);

window.MC = window.MC || {};
window.MC.videoCarousel = {
  ATTRS_ARRAY: [
    {
      //id: 'uijym1gexz',
      id: '9d37hjiund',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/446a52bc8a7814b33ca8833adbe050e594831604.jpg?image_crop_resized=300x220',
      //thumbUrl: '../images/320x180.png',
      title: 'Character Intro'
    },
    {

      //id: 'nlv3phbo9y',
      id: '4za81shwpy',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/d5a19e21b222e51424228d40c411c7b30a6f0386.jpg?image_crop_resized=300x220',
      //thumbUrl: '../images/320x180.png',
      title: 'First 15 Pages'
    },
    {
      //id: '2o1eb9bgbs',
      id: '2kdh6at4u5',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/eefdddb24f17bbfcff215841479f7ea3f481afa7.jpg?image_crop_resized=300x220',
      //thumbUrl: '../images/320x180.png',
      title: 'Leading the Audience'
    },
    {
      //id: '5jodpnn4x2',
      id: '1p82pinv8t',
      thumbUrl: 'https://embed-ssl.wistia.com/deliveries/8f6945871f55844577d62b044c45541e55306d35.jpg?image_crop_resized=300x220',
      //thumbUrl: '../images/320x180.png',
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
    MC.videoCarousel.videoPlayer.replaceWith(hashedId, { transition: 'fade' });
    MC.videoCarousel.videoPlayer.play();
    $('body').trigger('mcVideoCarouselAdvanced', { currentVideo: { videoIndex: vidIndex, hashedId: hashedId}});
    return MC.videoCarousel.videoPlayer;
  },

  endVideoHandler: function() {
    MC.videoCarousel.advanceVideo();
    $('body').trigger('wistiaVideoEnded');
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

    window._wq.push({'_all': function(videoPlayer){
      MC.optimizelyVideoPlayer = videoPlayer;
      MC.videoCarousel.videoPlayer = videoPlayer;

      MC.optimizelyVideoPlayer.bind('end', MC.videoCarousel.endVideoHandler);
      MC.optimizelyVideoPlayer.bind('play', function() {
        $('body').trigger('wistiaVideoPlaying')
      });

      MC.optimizelyVideoPlayer.bind('pause', function() {
        $('body').trigger('wistiaVideoPaused')
      });

      $('body').trigger('mcVideoCarouselVideoLoaded', { currentVideo: { videoIndex: 0, hashedId: videoPlayer.hashedId() }});

    }});



                                   //<script charset=\'ISO-8859-1\' src=\'//fast.wistia.com/assets/external/E-v1.js\' async></script>\
                                   //<div class=\'wistia_embed wistia_async_uijym1gexz playlistLinks=auto videoFoam=true\' style=\'height:360px;width:640px\'>&nbsp;</div>\
                               //<img src="https://s3-us-west-2.amazonaws.com/static.masterclass.com/optimizely-tests/video-carousel/images/close.png" class="close-button right" data-dismiss="modal" />\
                               //<img src="./images/close.png" class="close-button right" data-dismiss="modal" />\

    modalHtml = '\
                 <div class=\'modal fade\' id=\'videoModal\' tabindex=\'-1\' role=\'dialog\' aria-labelledby=\'videoModalLabel\'>\
                   <div class=\'modal-dialog\' role=\'document\'>\
                     <div class=\'\'>\
                       <div class=\'modal-header\'>\
                         <div class=\'container\'>\
                           <div class=\'row\'>\
                             <div class=\'col-xs-12\'>\
                               <h3 class=\'section-title\'>CLASS PREVIEW</h3>\
                               <img src="https://s3-us-west-2.amazonaws.com/static.masterclass.com/optimizely-tests/video-carousel/images/close.png" class="close-button right" data-dismiss="modal" />\
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
                                 <div class="header-wrapper">\
                                   <div class="col-xs-8">\
                                     <h3 data-main-video-title="true" style="">INTRODUCTION - FOCUS AND DESIRE</h3>\
                                   </div><!-- col-xs-12 -->\
                                   <div class="col-xs-4">\
                                     <a href="#cart?product_id=16" class="cta-button right btn btn-lg" style="" id="ttc-modal">\
                                       take the class\
                                     </a>\
                                   </div><!-- col-xs-4 -->\
                                 </div><!-- header-wrapper -->\
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
                    <div class=\'video-carousel\' id=\'vid-2\'> \
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

    $('body').on('wistiaVideoPlaying', function() {
      $('#play-button').fadeOut('fast');
    });

    $('body').on('wistiaVideoPaused', function() {
      $('#play-button').fadeIn('fast');
    })

    $('body').on('wistiaVideoEnded', function() {
      $('#play-button').fadeIn('fast');
    });

    $('body').on('click', '#play-button', function() {
      MC.videoCarousel.videoPlayer.play()
    })

    updateUIForCurrentVideo($($(SELECTORS.DATA_ATTRS.VIDEO_THUMB)[0]));

    $('#ttc-modal').on('click', function(e){
      if (!(MC.isLoggedIn() === true || gon.featherCartEnabled)) {
        e.preventDefault();
        MC.courseMarketing.setRequestedPath(e);
        MC.courseMarketing.openCreateModal();
      }
    });


    var georgeCloney = $('.hero-uniter').clone();
    $('.hero-uniter').replaceWith(georgeCloney);

    $('#play-hero-trailer').unbind();
    $('#play-hero-trailer').on('click', function(e) {
      $('#videoModal').modal('show');
    });

    $('#videoModal').on('shown.bs.modal', function(e) {
      MC.videoCarousel.videoPlayer.play();
    });

    $('#videoModal').on('shown.bs.modal', function(e) {
      var thumbsWidth = ($('.video-image-thumb-wrapper').length * $('.video-image-thumb-wrapper').outerWidth(true) - 30);
      $('.video-image-thumb-wrapper').parent().css('width', thumbsWidth);
    });

  },
};

window._wq = window._wq || [];
_wq.push({ '_all': {
  videoFoam: true,
  playerColor: '000000',
  playButton: 'false',
  controlsVisibleOnLoad: 'false'
}});

$(document).ready(MC.videoCarousel.ready);
