<script>
    import { fade } from "svelte/transition";

    let videos = [
        "/videos/calgary-downtown.mp4",
        "/videos/video-drone-houses.mp4",
        // "/videos/raw/mom-daughter-hug.mp4",
        // "/videos/father-daughter-piggyback.mp4",
    ];

    let currentIndex = $state(0);
    let activeVideo = $derived(videos[currentIndex]);

    const playNext = () => {
        currentIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    };
</script>

<div class="full-video">
{#key activeVideo}
    <video src={activeVideo} controlslist="nodownload" onended={playNext} transition:fade={{ duration: 500 }}
        autoplay webkit-playsinline playsinline disablepictureinpicture></video>
{/key}
    <!-- <div class="full-video-mask"></div> -->
</div>

<style>
    .full-video {
        border: 2px solid red;
        height: 100vh;
        width: 100vw;
        position: relative;
    }
    .full-video video {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }
    .full-video::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* background-color: green; */
        background-color: #cb9043;
        opacity: 0.7;
    }
</style>
