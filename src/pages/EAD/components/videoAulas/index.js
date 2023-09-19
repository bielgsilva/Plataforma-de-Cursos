import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { MdCheck } from 'react-icons/md';
import './styles.css';

const VideoAulas = () => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonText, setButtonText] = useState('Pausar');


    const togglePlayVideo = () => {
        const currentTime = playerRef.current.getCurrentTime();
      
        if (currentTime === 0) {
          setIsPlaying(true);
          setButtonText('Pausar');
          playerRef.current.playVideo();
        } else {
          const toggle = !isPlaying;
          setIsPlaying(toggle);
          playerRef.current[toggle ? 'playVideo' : 'pauseVideo']();
          setButtonText((prevButtonText) =>
            prevButtonText === 'Pausar' ? 'Despausar' : 'Pausar'
          );
        }
      };

    const handleNextVideo = () => {
        const currentIndex = videos.findIndex((video) => video.id === selectedVideo.id);

        if (currentIndex !== -1 && currentIndex + 1 < videos.length) {
            const nextVideo = videos[currentIndex + 1];
            const updatedVideos = videos.map((video) =>
                video.id === selectedVideo.id ? { ...video, visto: true } : video
            );
            setVideos(updatedVideos);
            setSelectedVideo(nextVideo);
            setIsPlaying(false)

        } else {
            const updatedVideos = videos.map((v) => v.id === selectedVideo.id ? { ...v, visto: true } : v);
            setVideos(updatedVideos);
            setIsPlaying(false);
            playerRef.current.pauseVideo();
            setButtonText('Despausar');
        }
    };
    const handleToggleFullScreen = () => {
        const iframe = document.querySelector('.youtube-container iframe');
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
    };


    const [videos, setVideos] = useState([
        {
            id: 1,
            title: 'Passo 1: Reúna os ingredientes e utensílios',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 2,
            title: 'Passo 2 - Como cozinhar o arroz',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 3,
            title: 'Passo 3 - Preparando o molho Su',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 4,
            title: 'Passo 4 - Tipos de corte para o Salmão ',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 5,
            title: 'Passo 5 - Como preparar a esteira de Bambu',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 6,
            title: 'Passo 6 - Tipos de Sushi',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 7,
            title: 'Passo 7 - Como montar e adiconar os ingredientes',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 8,
            title: 'Passo 8 - Enrolando o sushi corretamente',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 9,
            title: 'Passo 9 - Cortando os rolos de sushi',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        {
            id: 10,
            title: 'Passo 10 - Apresentação, decoração e molhos',
            url: 'https://youtube.com/shorts/oRQv6Wo-L5I?feature=share',
            visto: false,
        },
        // ... outros vídeos ...
    ]);

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);





    const playVideo = (video) => {
        setSelectedVideo(video);
    };

    const playNextVideo = () => {
        const currentIndex = videos.findIndex((video) => video.id === selectedVideo.id);

        if (currentIndex !== -1 && currentIndex + 1 < videos.length) {
            const nextVideo = videos[currentIndex + 1];
            const updatedVideos = videos.map((v) => (v.id === selectedVideo.id ? { ...v, visto: true } : v));
            setVideos(updatedVideos);
            setSelectedVideo(nextVideo);
        }
    };

    const toggleVideoViewed = (video) => {
        const updatedVideos = videos.map((v) =>
            v.id === video.id ? { ...v, visto: !v.visto } : v
        );
        setVideos(updatedVideos);
    };


    return (
        <div className="container-video overlay1">
            <div className="video-player flex-center-column overlay3">
                {selectedVideo ? (
                    <>
                        <div className="infos-video">
                            <h2>{selectedVideo.title}</h2>
                        </div>
                        <div className='youtube-container'>
                            <YouTube
                                videoId={selectedVideo.url.replace('https://youtube.com/shorts/', '')}
                                opts={{
                                    allowfullscreen: "allowfullscreen",
                                    mozallowfullscreen: "mozallowfullscreen",
                                    msallowfullscreen: "msallowfullscreen",
                                    oallowfullscreen: "oallowfullscreen",
                                    webkitallowfullscreen: "webkitallowfullscreen",
                                    width: '100%', // Largura do player
                                    height: '100%', // Altura do player
                                    playerVars: {
                                        cc_load_policy: 0,
                                        controls: 0,
                                        disablekb: 1,
                                        fs: 1,
                                        playsinline: 1,
                                        modestbranding: 0,
                                        iv_load_policy: 3,
                                        rel: 0,
                                        showinfo: 0,
                                        host: 'https://www.youtube.com'

                                    },

                                }}
                                onReady={(event) => {
                                    playerRef.current = event.target; // Armazena a referência do player
                                }}
                                onEnd={playNextVideo}
                                allowFullScreen={true}

                            />
                        </div>
                        <div className='btns-ytb flex-center'>
                            <button onClick={togglePlayVideo}>Começar</button>
                            <button onClick={togglePlayVideo}>{buttonText}</button>
                            <button onClick={handleNextVideo}>Prox. Vídeo</button>
                            <button onClick={handleToggleFullScreen}>Tela Cheia</button>
                        </div>


                    </>
                ) : (
                    <p>Selecione um vídeo para reproduzir.</p>
                )}
            </div>

            <div className="video-list overlay3">

                {videos.map((video) => (
                    <div
                        key={video.id}
                        className={`video-item 
                        ${video.visto ? 'video-item-active ' : ''}`}
                        onClick={() => {
                            playVideo(video);
                        }}
                    >
                        <MdCheck
                            className={`check-icon ${video.visto ? 'visto' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleVideoViewed(video);
                            }}
                        />
                        <h2 className={`${video.visto ? 'visto' : ''}`}>{video.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoAulas;
