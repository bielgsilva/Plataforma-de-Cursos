import React, { useState, useEffect, useRef } from 'react';
import { MdCheck } from 'react-icons/md';
import './styles.css';

const VideoAulas = () => {
    const videoRef = useRef(null);

    const [videos, setVideos] = useState([
        {
            id: 1,
            title: '1 - Introdução à Matemática',
            description: '<Uma introdução básica ao mundo da matemáticaUma introdução básica ao mundo da matemáticaUma introdução básica ao mundo da matemáticaUma introdução básica ao mundo da matemática>.',
            url: 'https://fimdasdores.space/wp-content/uploads/2023/07/Reportagem-Nootropicos-Veja-ate-o-final.mp4',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 2,
            title: '2 -  VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: 'https://fimdasdores.space/wp-content/uploads/2023/07/SnapInsta.io-30-Minutos-para-o-fim-do-Alzheimer.mp4',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 3,
            title: '4 -  VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 4,
            title: `5 - Video Teste`,
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 5,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 6,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 7,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 8,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 9,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        {
            id: 10,
            title: '2 VIDEO VIDEO VIDEO VIDEO VIDEO',
            description: 'Uma introdução básica ao mundo da matemática.',
            url: '',
            duration: '5:30',
            tags: ['Matemática', 'Básico'],
            visto: false,
        },
        // Adicione mais vídeos aqui...
    ]);

    const firstUnwatchedVideo = videos.find((video) => !video.visto);
    const [selectedVideo, setSelectedVideo] = useState(firstUnwatchedVideo || videos[0]);

    const playVideo = (video) => {
        setSelectedVideo(video);
        if (!video.visto) {
            const updatedVideos = videos.map((v) => (v.id === video.id ? { ...v, visto: true } : v));
            setVideos(updatedVideos);
        }
    };
    const playNextVideo = () => {
        // Encontra o índice do vídeo atual na lista de vídeos
        const currentIndex = videos.findIndex(video => video.id === selectedVideo.id);

        // Verifica se o próximo vídeo existe na lista
        if (currentIndex !== -1 && currentIndex + 1 < videos.length) {
            const nextVideo = videos[currentIndex + 1];
            const currentVideo = videos[currentIndex]
            currentVideo.visto = true

            // Se o próximo vídeo não foi visto, marque-o como visto
            if (!nextVideo.visto) {
                const updatedVideos = videos.map(video =>
                    video.id === nextVideo.id ? { ...video, visto: true } : video
                );
                setVideos(updatedVideos);
            }

            // Reproduza o próximo vídeo
            setSelectedVideo(nextVideo);
        }
    };


    const toggleCheck = (video) => {
        const updatedVideos = videos.map((v) => (v.id === video.id ? { ...v, visto: !v.visto } : v));
        setVideos(updatedVideos);
    };

    // Efeito para atualizar o localStorage quando a lista de vídeos for modificada
    useEffect(() => {
        localStorage.setItem('videos', JSON.stringify(videos));
    }, [videos]);

    // Efeito para restaurar o estado dos vídeos ao inicializar o componente
    useEffect(() => {
        const savedVideos = JSON.parse(localStorage.getItem('videos'));
        if (savedVideos) {
            setVideos(savedVideos);
        }
    }, []);

    return (
        <div className="container-video">
            <div className="video-player flex-center-column">
                {selectedVideo ? (
                    <>
                        <div className='infos-video'>
                            <h2>{selectedVideo.title}</h2>
                            <p>{selectedVideo.description}</p>
                            <p>Duração: {selectedVideo.duration}</p>
                            <p>Tags: {selectedVideo.tags.join(', ')}</p>

                        </div>
                        {selectedVideo.url ? (
                            <video
                                ref={videoRef}
                                controls
                                title={selectedVideo.title}
                                src={selectedVideo.url}
                                frameBorder="0"
                                allowFullScreen
                                disablePictureInPicture
                                autoPlay
                                controlsList="nodownload"
                                onEnded={() => playNextVideo()}

                            ><source src={selectedVideo.url} type="video/mp4" /></video>
                        ) : (
                            <video controls>
                                <source src={selectedVideo.url} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        )}
                    </>
                ) : (
                    <p>Selecione um vídeo para reproduzir.</p>
                )}
            </div>

            <div className="video-list">
                <h2>Aulas</h2>
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="video-item"
                        onClick={() => {
                            toggleCheck(video);
                            playVideo(video);
                        }}
                    >
                        <MdCheck
                            className={`check-icon ${video.visto ? 'visto' : ''}`}
                            onClick={(event) => {
                                event.stopPropagation(); // Evita a propagação do evento para o elemento pai (.video-item)
                                toggleCheck(video);
                                playVideo(video);
                            }}
                        />
                        <h2>{video.title}</h2>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default VideoAulas;
