if (Meteor.isServer) {
  addPage = function (name, title) {
    if (Pages.findOne({name: name}) == undefined) {
      Pages.insert({
        name: name,
        title: title,
      })
    }
  }

  Meteor.startup(function () {
    addPage("blog", "Blog")
    // code to run on server at startup
  });
}