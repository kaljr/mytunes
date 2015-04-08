// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('change', this.render, this)
  },

  render: function() {

    this.collection.forEach(SongQueueEntryView, function() {});
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render()
      })
    );

    return this.$el;
  }

});
