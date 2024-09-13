function Loader() {
    return (
        <>
            <div className="loader"></div>

            <style>{`
                .loader {
                    height: 20px;
                    width: 100vw;
                    --c: no-repeat linear-gradient(#f87171 0 0);
                    background: var(--c), var(--c), #fca5a5;
                    background-size: 60% 100%;
                    animation: l16 1s infinite;
                }

                @keyframes l16 {
                    0% {
                        background-position: -150% 0, -150% 0;
                    }
                    66% {
                        background-position: 250% 0, -150% 0;
                    }
                    100% {
                        background-position: 250% 0, 250% 0;
                    }
                }
            `}</style>
        </>
    );
}

export default Loader;
