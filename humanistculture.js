Pages = new Meteor.Collection("Pages")
Posts = new Meteor.Collection("Posts")




if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

}



if (Meteor.isClient) {

    Meteor.startup(function () {
      $('#nonartarea').addClass('music')
    })

    Template.body.events({
        'click #playMusic': function () {
            $('html, body').animate({
                scrollTop: $("#earth").offset().bottom
            }, 2000);
        },
        'scroll': function () {
          if ($('.scrollingHeader').offset().top >= 50) {
            $('.actionButtons').fadeIn();
          } else {
            $('.actionButtons').fadeOut();
          }
          if ($('.scrollingHeader').offset().top >= -116) {
            $('.fixedHeader').addClass('hidden');
            $('.scrollingHeader').removeClass('hidden');
            $('#title').removeClass('hidden');
            $('.headerMenu').fadeOut()
          } else {
            $('.fixedHeader').removeClass('hidden');
            $('.scrollingHeader').addClass('hidden');
            $('#title').addClass('hidden');
            $('.headerMenu').fadeIn()
          }
          // if ($('.earth').offset().top >= -200) {
          //   $('#contentFixed').addClass('hidden');
          //   $('#content').removeClass('hidden');
          // } else {
          //   $('#contentFixed').removeClass('hidden');
          //   $('#content').addClass('hidden');
          // }
          if (($('.earth').offset().top >= 100) || ($('.earth').offset().top <= -250)) {
            $('.solsticeTitleImage').fadeOut();
          } else {
            $('.solsticeTitleImage').fadeIn();
          }
        }
    })

}

