var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (let list in this.playlists) {
      let listObj = this.playlists[list];
      console.log(listObj.id + ': ' + listObj.name + ' - ' + listObj.tracks.length + ' tracks');
    }
  },
  printPlaylist: function (playlistId) {
    for (let list in this.playlists) {
      var listObj = this.playlists[list];
      if (listObj.id == playlistId) {
        console.log(listObj.id + ': ' + listObj.name + ' - ' + listObj.tracks.length + ' tracks');
        for (let i = 0; i < listObj.tracks.length; i++) {
          let trackObj = this.tracks[listObj.tracks[i]];
          console.log(trackObj.id + ': ' + trackObj.name + ' by ' + trackObj.artist + ' (' + trackObj.album + ')');
        }
      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    return this.playlists[playlistId].tracks.push(trackId);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    let uid = 1;
    let length = 0;
    for (track in this.tracks) {
      length = track.length;
      uid = Math.max(uid, Number(track.substr(1)));
    }
    uid++;
    uid = uid.toString();
    let trackId = 't' + '0' * (length - 1 - uid.length) + uid;

    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    }
    return this.tracks;
  },
  addPlaylist: function (name) {
    let uid = 1;
    var length = 0;
    for (list in this.playlists) {
      length = list.length;
      uid = Math.max(uid, Number(list.substr(1)));
    }
    uid++;
    uid = uid.toString();
    let playlistId = 'p' + '0' * (length - 1 - uid.length) + uid;


    this.playlists[playlistId] = {
      id: playlistId,
      name: name
    }
    return this.playlists;
  },
  printSearchResults: function(query) {
    query = query.toLowerCase();
    for (let track in this.tracks) {
      let trackObj = this.tracks[track];
      for (let info in trackObj) {
        let infoValue = trackObj[info].toLowerCase();
        if (infoValue.search(query) !== -1) {
          console.log(trackObj.id + ': ' + trackObj.name + ' by ' + trackObj.artist + ' (' + trackObj.album + ')');
        }
      }
    }
  }
