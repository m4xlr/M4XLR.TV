import { LiveKitRoom, ParticipantProps, StageProps, ControlsProps} from 'livekit-react'
// CSS should be explicitly imported if using the default UI
import 'livekit-react/dist/index.css'
// used by the default ParticipantView to maintain video aspect ratio.
// this CSS must be imported globally
// if you are using a custom Participant renderer, this import isn't necessary.
import "react-aspect-ratio/aspect-ratio.css";

export const RoomPage = () => {
    const url = 'ws://143.244.182.101:7880'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA0ODEwNTYsImlzcyI6IkFQSXdMZWFoN2c0ZnVMWURZQUplYUtzU0UiLCJqdGkiOiJtYXhib3QiLCJuYmYiOjE2Mjc4ODkwNTYsInZpZGVvIjp7InJvb20iOiJteXJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.Nd4NeVLsTXYA7ar4RWsxAUlL1vM_pu_zE3fwsSkWDJ8'
    return (
      <LiveKitRoom url={url} token={token}
        // participantRenderer renders a single participant
        participantRenderer={(props: ParticipantProps) => { return <div/> }}
        // controlRenderer renders the control bar
        controlRenderer={(props: ControlsProps) => { return <div/> }}
      />
    )
  }