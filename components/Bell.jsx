import React, { useEffect } from "react";
import Sound from "react-native-sound";

const SoundOnRender = () => {
  useEffect(() => {
    // Define the sound file path (replace 'soundfile.mp3' with your file)
    const sound = new Sound(
      "../assets/sounds/bell.mp3",
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log("Failed to load the sound", error);
          return;
        }

        // Play the sound when the component is rendered
        sound.play((success) => {
          if (success) {
            console.log("Sound played successfully");
          } else {
            console.log("Sound playback failed");
          }
        });
      }
    );

    // Release the sound object when the component unmounts
    return () => {
      sound.release();
    };
  }, []);

  return null; // Since this component just plays the sound, it doesn't render any UI
};

export default SoundOnRender;
