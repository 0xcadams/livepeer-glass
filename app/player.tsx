"use client";

import {
  FullscreenButton,
  PlayButton,
  Player as LivepeerPlayer,
  Progress,
  TimeDisplay,
  useMediaController,
  Volume,
} from "@livepeer/react";

export function Player() {
  return (
    <LivepeerPlayer
      playbackId="a63b1xebevdtn0lq"
      objectFit="contain"
      muted
      autoPlay
      showLoadingSpinner={false}
      aspectRatio="16to9"
      theme={{
        colors: {
          accent: "#fff",
        },
        sizes: {
          thumb: "15px",
          thumbActive: "15px",
          trackActive: "4px",
          trackInactive: "4px",
        },
        radii: {
          containerBorderRadius: "8px",
        },
      }}
      controls={{
        autohide: 1000,
      }}
    >
      <CustomControls />
    </LivepeerPlayer>
  );
}

const CustomControls = () => {
  const loading = useMediaController((state) => state.loading);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100%",
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayButton
          size={150}
          playIcon={<PlayIcon />}
          pauseIcon={<PauseIcon />}
        />
      </div>
      <div
        style={{
          justifyContent: "center",

          display: "inline-flex",
          alignItems: "center",

          position: "absolute",
          flexDirection: "column",

          bottom: 20,
          left: 20,
          right: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            color: "#fff",
            flexDirection: "row",
            marginBottom: 12,
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: 6, fontWeight: 300 }}>UNLOCKED</span>
          <div
            style={{
              width: 20,
              height: 20,
            }}
          >
            <UnlockedIcon />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              flexGrow: 1,
            }}
          >
            <Progress />
          </div>

          <TimeDisplay />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <PlayButton
              playIcon={<PlayIcon size={30} />}
              pauseIcon={<PauseIcon size={30} />}
            />

            <Volume mutedIcon={<MutedIcon />} unmutedIcon={<UnmutedIcon />} />
          </div>

          <FullscreenButton
            exitIcon={<ExitFullscreenIcon />}
            enterIcon={<EnterFullscreenIcon />}
          />
        </div>
      </div>
    </>
  );
};

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 100,
          height: 100,
          color: "#fff",
          flexDirection: "row",
          alignItems: "center",
          animation: "rotate 2.4s linear infinite",
        }}
      >
        <RefreshCircle />
      </div>
    </div>
  );
};

const UnlockedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>Lock Open</title>
    <path
      fill="currentColor"
      d="M368 192H192v-80a64 64 0 11128 0 16 16 0 0032 0 96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64z"
    />
  </svg>
);

const MutedIcon = () => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Volume Mute</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M416 432L64 80"
      />
      <path
        fill="currentColor"
        d="M243.33 98.86a23.89 23.89 0 00-25.55 1.82l-.66.51-28.52 23.35a8 8 0 00-.59 11.85l54.33 54.33a8 8 0 0013.66-5.66v-64.49a24.51 24.51 0 00-12.67-21.71zM251.33 335.29L96.69 180.69A16 16 0 0085.38 176H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l92 75.31a23.9 23.9 0 0025.87 1.69A24.51 24.51 0 00256 391.45v-44.86a16 16 0 00-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 10-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l14.36 14.36a8 8 0 0013.55-4.31A146 146 0 00352 256zM416 256c0-51.18-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26L389 337.4a8 8 0 0013.13-2.79C411 311.76 416 287.26 416 256z"
      />
      <path
        fill="currentColor"
        d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 001.59 9l11.92 11.92a8 8 0 0012.92-2.16C471.6 344.9 480 305 480 256z"
      />
    </svg>
  </div>
);

const UnmutedIcon = () => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Volume High</title>
      <path
        fill="currentColor"
        d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"
      />
      <path
        fill="currentColor"
        d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"
      />
      <path
        fill="currentColor"
        d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"
      />
    </svg>
  </div>
);

const EnterFullscreenIcon = () => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Expand</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
      />
    </svg>
  </div>
);

const ExitFullscreenIcon = () => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Contract</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M304 416V304h112M314.2 314.23L432 432M208 96v112H96M197.8 197.77L80 80M416 208H304V96M314.23 197.8L432 80M96 304h112v112M197.77 314.2L80 432"
      />
    </svg>
  </div>
);

const PlayIcon = ({ size }: { size?: number }) => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Play</title>
      <path
        fill="currentColor"
        d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"
      />
    </svg>
  </div>
);

const PauseIcon = ({ size }: { size?: number }) => (
  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Pause</title>
      <path
        fill="currentColor"
        d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z"
      />
    </svg>
  </div>
);

const RefreshCircle = () => (
  <svg
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <title>Refresh Circle</title>
    <path
      fill="currentColor"
      d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208zm0 313a94 94 0 010-188h4.21l-14.11-14.1a14 14 0 0119.8-19.8l40 40a14 14 0 010 19.8l-40 40a14 14 0 01-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1066 66 14 14 0 0128 0 94.11 94.11 0 01-94 94z"
    />
  </svg>
);
