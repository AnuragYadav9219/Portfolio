const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-950 flex flex-col items-center justify-center z-[9999] overflow-hidden transition-colors duration-500">

            <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>

            <div className="relative flex flex-col items-center">

                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-fadeInUp">
                    Anurag Yadav
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase animate-fadeInUp delay-200">
                    Full Stack Developer
                </p>

                <div className="mt-8 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-loadingBar"></div>
                </div>

            </div>
        </div>
    );
};

export default PageLoader;