import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { MdCheck } from 'react-icons/md';
import './styles.css';

const VideoAulas = () => {
    const playerRef = useRef(null);

    const handlePlayVideo = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const handlePauseVideo = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
        }
    };
    const handleSeekForward = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime + 5, true); // Adianta 5 segundos
        }
    };

    const handleSeekBackward = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime - 5, true); // Volta 5 segundos
        }
    };
    const [videos, setVideos] = useState([
        {
            id: 1,
            title: 'Passo 1: Reúna os ingredientes e utensílios',
            url: 'https://youtu.be/H7qXc1w3wjc',
            visto: false,
        },
        {
            id: 2,
            title: 'Passo 2 - Como cozinhar o arroz',
            url: 'https://youtu.be/GkJbJmSWvmE',
            visto: false,
        },
        {
            id: 3,
            title: 'Passo 3 - Preparando o molho Su',
            url: 'https://youtu.be/P5YIRnHvDqE',
            visto: false,
        },
        {
            id: 4,
            title: 'Passo 4 - Tipos de corte para o Salmão ',
            url: 'https://youtu.be/bXHsJY7Vkko',
            visto: false,
        },
        {
            id: 5,
            title: 'Passo 5 - Como preparar a esteira de Bambu',
            url: 'https://youtu.be/zAh32sneDE8',
            visto: false,
        },
        {
            id: 6,
            title: 'Passo 6 - Tipos de Sushi',
            url: 'https://youtu.be/NSRTeVP-Nd8',
            visto: false,
        },
        {
            id: 7,
            title: 'Passo 7 - Como montar e adiconar os ingredientes',
            url: 'https://www.youtube.com/watch?v=w17Z0-kdagE',
            visto: false,
        },
        {
            id: 8,
            title: 'Passo 8 - Enrolando o sushi corretamente',
            url: 'https://www.youtube.com/watch?v=w17Z0-kdagE',
            visto: false,
        },
        {
            id: 9,
            title: 'Passo 9 - Cortando os rolos de sushi',
            url: 'https://youtu.be/NXpbCFdpH-s',
            visto: false,
        },
        {
            id: 10,
            title: 'Passo 10 - Apresentação, decoração e molhos',
            url: 'https://youtu.be/xsOUqdfH9n4',
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
                                videoId={selectedVideo.url.replace('https://youtu.be/', '')}
                                opts={{
                                    width: '100%', // Largura do player
                                    height: '100%', // Altura do player
                                    playerVars: {
                                        cc_load_policy: 0,
                                        controls: 1,
                                        disablekb: 1,
                                        fs: 0,
                                        playsinline: 1,
                                        modestbranding: 1,
                                        iv_load_policy: 3,
                                        rel: 1,
                                        showinfo: 0,
                                        host: 'https://www.youtube.com'

                                    },

                                }}
                                onReady={(event) => {
                                    playerRef.current = event.target; // Armazena a referência do player
                                }}
                                onEnd={playNextVideo}
                            />
                        </div>
                        <div className='btns-ytb flex-center'>
                            <button onClick={handlePlayVideo}>Play</button>
                            <button onClick={handlePauseVideo}>Pausar</button>
                            <button onClick={handleSeekBackward}>Retornar 5s</button>
                            <button onClick={handleSeekForward}>Avançar 5s</button>
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
                        className={`video-item ${video.visto ? 'video-item-active ' : ''}`}
                        onClick={() => {
                            playVideo(video);
                        }}
                    >
                        <MdCheck
                            className={`check-icon ${video.visto ? 'visto' : ''}`}
                        />
                        <h2>{video.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoAulas;
