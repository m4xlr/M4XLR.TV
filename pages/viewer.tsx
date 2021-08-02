import {
    connect,
    RoomEvent,
    RemoteParticipant,
    RemoteTrackPublication,
    RemoteTrack,
    Participant,
  } from 'livekit-client';

  
  connect('ws://143.244.182.101:7880', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA0NzY1MjAsImlzcyI6IkFQSXdMZWFoN2c0ZnVMWURZQUplYUtzU0UiLCJqdGkiOiJtYXhib3QiLCJuYmYiOjE2Mjc4ODQ1MjAsInZpZGVvIjp7InJvb20iOiJteXJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.L8wYLw1-bypE5Lvn4u8rAjZBXKcSZSej0happKcY3sQ', {
    audio: true,
    video: true,
  }).then((room) => {
    console.log('connected to room', room.name);
    console.log('participants in room:', room.participants.size);
  
    room
      .on(RoomEvent.TrackSubscribed, handleTrackSubscribed)
      .on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed)
      .on(RoomEvent.ActiveSpeakersChanged, handleActiveSpeakerChange)
      .on(RoomEvent.Disconnected, handleDisconnect);
  });
  
  function handleTrackSubscribed(
    track: RemoteTrack,
    publication: RemoteTrackPublication,
    participant: RemoteParticipant
  ) {
    if (track.kind === Track.Kind.Video || track.kind === Track.Kind.Audio) {
      // attach it to a new HTMLVideoElement or HTMLAudioElement
      const element = track.attach();
      parentElement.appendChild(element);
    }
  }
  
  function handleTrackUnsubscribed(
    track: RemoteTrack,
    publication: RemoteTrackPublication,
    participant: RemoteParticipant
  ) {
    // remove tracks from all attached elements
    track.detach();
  }
  
  function handleActiveSpeakerChange(speakers: Participant[]) {
    // show UI indicators when participant is speaking
  }
  
  function handleDisconnect() {
    console.log('disconnected from room');
  }