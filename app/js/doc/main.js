// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST FOR THE DOCS!
// ++++++++++++++++++++++++++++++++++++++++++


///
!function($) {

  $(function() {

    var $window = $(window);

    // Disable certain links in docs
    $('section').not('#scrollspy').find('[href^=#]').click(function(e) {
      e.preventDefault();
    })

    // side bar
    setTimeout(function() {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function() {
            return $window.width() <= 980 ? 290 : 210
          }, bottom: 270
        }
      })
    }, 100)

    // Hide/Show Back To Top
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('#back-to-top').removeClass('is-hidden');
      } else {
        $('#back-to-top').addClass('is-hidden');
      }
    });

    // Animate scroll to topp
    $('#back-to-top').each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 'fast');
        return false;
        $(this).addClass('is-hidden');
      });
    });

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function() {
      var $this = $(this)
              , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
        selector: '.show-grid > [class*="span"]'
        , title: function() {
          return $(this).width() + 'px'
        }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('[data-toggle="tooltip"]').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover]")
            .popover()
            .click(function(e) {
              e.preventDefault()
            })

    // button state demo
    $('#fat-btn, #fat-btn1')
            .click(function() {
              var btn = $(this)
              btn.button('loading')
              setTimeout(function() {
                btn.button('reset')
              }, 3000)
            })

    // carousel demo
    $('#myCarousel').carousel()

    // javascript build logic
    var inputsComponent = $("#components.download input")
            , inputsPlugin = $("#plugins.download input")
            , inputsVariables = $("#variables.download input")

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', function(e) {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', function(e) {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', function(e) {
      e.preventDefault()
      inputsVariables.val('')
    })

  })


//Typehead
  $('#typeheadExample').typeahead(
          {
            items: 4,
            source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

          });

  // Ion.RangeSlider Initializer
  $('#range_1').ionRangeSlider();
  $('#range_2').ionRangeSlider();

//filter dropdown list
  $('#filter').filterList();
    $('#filter1').filterList();

// Scrollspy for navigation in default.hbs page
  var $window = $(window)
  var $body   = $(document.body)

  $body.scrollspy({
    target: '.dive-docs-sidebar',
    offset: -250
  })

  $window.on('load', function () {
    $body.scrollspy('refresh')
  })


// example of line highlight
$('#table-highlight-example').on('click','tbody tr',function(e){
  $(this).toggleClass('highlight');
});

// example of table SORTING arrows
$('#table-highlight-example').on('click','th',function(e){
  if ($(this).hasClass('sorting')){
    $(this).removeClass('sorting').addClass('sorting_desc');
  };
  $(this).toggleClass('sorting_desc sorting_asc');   
});





}(window.jQuery);
