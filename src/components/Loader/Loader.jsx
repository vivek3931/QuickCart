const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 bg-opacity-50 z-50">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-200"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-transparent border-t-orange-500 animate-spin"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-transparent border-l-blue-500 animate-spin-slow"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-sm">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;