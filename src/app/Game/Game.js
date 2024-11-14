import React, { useState, useEffect, useRef } from 'react';
import './game.css';
import { gsap } from 'gsap';
import ConfettiGenerator from 'confetti-js';
import Navbar from '../../components/navbar'; // Ensure the path is correct based on your file structure

const icons = [
    '/images/heart.png',
    '/images/star.png',
    '/images/diamond.png',
    '/images/kiss.png',
    '/images/rose.png',
    '/images/wine.png'
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Game = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);
    const confettiRef = useRef(null);

    useEffect(() => {
        const shuffledIcons = shuffleArray([...icons, ...icons]);
        const cards = shuffledIcons.map((icon, index) => ({
            id: index,
            icon,
            isFlipped: false,
            isMatched: false
        }));
        setCards(cards);
    }, []);

    useEffect(() => {
        if (isGameStarted) {
            const timer = setInterval(() => {
                setTimeLeft(time => {
                    if (time > 0) return time - 1;
                    setIsGameOver(true);
                    setIsGameStarted(false);
                    return 0;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isGameStarted]);

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [first, second] = flippedCards;
            if (cards[first].icon === cards[second].icon) {
                setMatchedCards([...matchedCards, first, second]);
                setCards(prevCards => prevCards.map(card => {
                    if (card.id === first || card.id === second) {
                        return { ...card, isMatched: true };
                    }
                    return card;
                }));
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    gsap.to(`.card-${first}, .card-${second}`, {
                        rotationY: 0,
                        duration: 0.6,
                        onComplete: () => {
                            setCards(prevCards => prevCards.map(card => {
                                if (card.id === first || card.id === second) {
                                    return { ...card, isFlipped: false };
                                }
                                return card;
                            }));
                            setFlippedCards([]);
                        }
                    });
                }, 1000);
            }
            setMoves(prevMoves => prevMoves + 1);
        }
    }, [flippedCards, cards, matchedCards]);

    useEffect(() => {
        if (matchedCards.length === cards.length && isGameStarted) {
            setIsGameWon(true);
            setIsGameOver(true);
            setTimeout(() => {
                const confettiSettings = { target: confettiRef.current };
                const confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
                gsap.fromTo(".game-won", { scale: 0 }, { scale: 1.5, duration: 1, ease: "bounce" });
                return () => confetti.clear();
            }, 500);
        }
    }, [matchedCards, cards, isGameStarted]);

    const handleCardClick = (index) => {
        if (flippedCards.length < 2 && !cards[index].isFlipped && isGameStarted && !isGameOver) {
            setCards(prevCards => prevCards.map((card, i) => {
                if (i === index) {
                    return { ...card, isFlipped: true };
                }
                return card;
            }));
            setFlippedCards([...flippedCards, index]);
            gsap.to(`.card-${index}`, {
                rotationY: 180,
                duration: 0.6
            });
        }
    };

    const handleGameStart = () => {
        setIsGameStarted(true);
        setIsGameOver(false);
        setIsGameWon(false);
        setMoves(0);
        setTimeLeft(60);
        setMatchedCards([]);
        setFlippedCards([]);
        const shuffledIcons = shuffleArray([...icons, ...icons]);
        const cards = shuffledIcons.map((icon, index) => ({
            id: index,
            icon,
            isFlipped: false,
            isMatched: false
        }));
        setCards(cards);
    };

    return (
        <div className="game-container">
            <Navbar /> {/* Including Navbar */}
            <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax text-white text-center mt-4">Match Magic</h1>
            <div className="score-board">
                <span className="moves-counter">Moves: {moves}</span>
                <span className="timer">Time Left: {timeLeft}s</span>
            </div>
            {!isGameStarted && (
                <button className="start-button" onClick={handleGameStart}>
                    Start Game
                </button>
            )}
            {isGameStarted && (
                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`card card-${index} ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="card-front"></div>
                            <div className="card-back">
                                <img src={card.icon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {isGameOver && !isGameWon && (
                <div className="game-over">
                    Game Over!
                    <div>
                        <button className="reset-button" onClick={handleGameStart}>Restart</button>
                    </div>
                </div>
            )}
            {isGameOver && isGameWon && (
                <div className="game-won">
                    Congratulations! You matched all cards!
                    <div>
                        <button className="reset-button" onClick={handleGameStart}>Play Again</button>
                    </div>
                    <canvas ref={confettiRef} className="confetti-canvas"></canvas>
                </div>
            )}
        </div>
    );
};

export default Game;
