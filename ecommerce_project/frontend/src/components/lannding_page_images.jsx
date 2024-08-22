import { useInView } from 'react-intersection-observer';
import { useState, useCallback } from 'react';
import TertiryButton from '../components/tertiryButton';
import { useNavigate } from 'react-router-dom';

function Images (){
    const navigate = useNavigate();
    const [animatedImages, setAnimatedImages] = useState({
        fashion: false,
        jewel1: false,
        jewel2: false,
        jewel3: false,
        watch: false,
        bag1: false,
        bag2: false,
        bag3: false,
        coat1: false,
        coat2: false,
        coat3: false,
        shoes1: false,
        shoes2: false,
        shoes3: false,
        formal: false,
    });

    const handleAnimation = useCallback((imageKey, inView) => {
        if (inView && !animatedImages[imageKey]) {
            setAnimatedImages(prevState => ({ ...prevState, [imageKey]: true }));
        }
    }, [animatedImages]);

    const { ref: fashion, inView: imageInView1 } = useInView({ threshold: 0.5 });
    const { ref: jewel1, inView: imageInView2 } = useInView({ threshold: 0.2 });
    const { ref: jewel2, inView: imageInView3 } = useInView({ threshold: 0.5 });
    const { ref: jewel3, inView: imageInView4 } = useInView({ threshold: 0.2 });
    const { ref: watch, inView: imageInView5 } = useInView({ threshold: 0.2 });
    const { ref: bag1, inView: imageInView6 } = useInView({ threshold: 0.4 });
    const { ref: bag2, inView: imageInView7 } = useInView({ threshold: 0.4 });
    const { ref: bag3, inView: imageInView8 } = useInView({ threshold: 0.4 });
    const { ref: coat1, inView: imageInView9 } = useInView({ threshold: 0.2 });
    const { ref: coat2, inView: imageInView10 } = useInView({ threshold: 0.5 });
    const { ref: coat3, inView: imageInView11 } = useInView({ threshold: 0.2 });
    const { ref: shoes1, inView: imageInView12 } = useInView({ threshold: 0.3 });
    const { ref: shoes2, inView: imageInView13 } = useInView({ threshold: 0.5 });
    const { ref: shoes3, inView: imageInView14 } = useInView({ threshold: 0.2 });
    const { ref: formal, inView: imageInView15 } = useInView({ threshold: 0.2 });

    handleAnimation('fashion', imageInView1);
    handleAnimation('jewel1', imageInView2);
    handleAnimation('jewel2', imageInView3);
    handleAnimation('jewel3', imageInView4);
    handleAnimation('watch', imageInView5);
    handleAnimation('bag1', imageInView6);
    handleAnimation('bag2', imageInView7);
    handleAnimation('bag3', imageInView8);
    handleAnimation('coat1', imageInView9);
    handleAnimation('coat2', imageInView10);
    handleAnimation('coat3', imageInView11);
    handleAnimation('shoes1', imageInView12);
    handleAnimation('shoes2', imageInView13);
    handleAnimation('shoes3', imageInView14);
    handleAnimation('formal', imageInView15);
    

    return (
        <section className="py-14 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Women's Basic</h1>
                <div
                    ref={fashion}
                    className={`mb-8 relative transition-opacity duration-1000 ${animatedImages.fashion ? 'animate-slideInDown' : 'opacity-0'}`}
                >
                    <img
                        src="/static/Assets/images/womenfashion.avif"
                        alt="Not found"
                        style={{ height: '450px' }}
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4">
                        <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/2')} />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Jewelry</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div
                            ref={jewel1}
                            className={`relative ${animatedImages.jewel1 ? 'animate-slideInLeft' : ''}`}
                        >
                            <img
                                src="/static/Assets/images/jewel1.avif"
                                alt="Not found"
                                style={{ height: '900px' }}
                                className="w-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4">
                                <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/1')} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div
                                ref={jewel2}
                                className={`relative ${animatedImages.jewel2 ? 'animate-slideIn' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/jewel2.avif"
                                    alt="Not found"
                                    style={{ height: '550px' }}
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/1')} />
                                </div>
                            </div>
                            <div
                                ref={jewel3}
                                className={`relative ${animatedImages.jewel3 ? 'animate-slideInDown' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/jewel3.avif"
                                    alt="Not found"
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/1')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Wataches</h1>
                    <div
                        ref={watch}
                        className={`relative mb-8 ${animatedImages.watch ? 'animate-slideInDown' : ''}`}
                    >
                        <img
                            src="/static/Assets/images/watch.avif"
                            alt="Not found"
                            style={{ height: '550px' }}
                            className="w-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4">
                            <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/3')} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Bags</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex flex-col gap-6">
                            <div
                                ref={bag1}
                                className={`relative ${animatedImages.bag1 ? 'animate-slideInLeft' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/bag1.avif"
                                    alt="Not found"
                                    style={{ height: '425px' }}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/4')} />
                                </div>
                            </div>
                            <div
                                ref={bag2}
                                className={`relative ${animatedImages.bag2 ? 'animate-slideInDown' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/bag2.avif"
                                    alt="Not found"
                                    style={{ height: '450px' }}
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/4')} />
                                </div>
                            </div>
                        </div>
                        <div
                            ref={bag3}
                            className={`relative ${animatedImages.bag3 ? 'animate-slideIn' : ''}`}
                        >
                            <img
                                src="/static/Assets/images/bag3.avif"
                                alt="Not found"
                                style={{ height: '900px' }}
                                className="w-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4">
                                <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/4')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Fragrances</h1>
                    <div
                        className="mb-8 relative transition-opacity duration-1000"
                    >
                        <video
                            src="/static/Assets/videos/perfume.mp4"
                            style={{ height: '450px', width: '100%' }}
                            className="w-full object-cover rounded-lg"
                            autoPlay
                            loop
                            muted
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 left-4">
                            <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/5')} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Formals</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div
                            ref={coat1}
                            className={`relative mb-8 ${animatedImages.coat1 ? 'animate-slideInLeft' : ''}`}
                        >
                            <img
                                src="/static/Assets/images/coat1.avif"
                                alt="Coat 1"
                                style={{ height: '800px', width: '900px' }}
                                className="object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4">
                                <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/6')} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div
                                ref={coat2}
                                className={`relative mb-6 ${animatedImages.coat2 ? 'animate-slideIn' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/coat2.avif"
                                    alt="Coat 2"
                                    style={{ height: '400px', width: '650px' }}
                                    className="object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/6')} />
                                </div>
                            </div>
                            <div
                                ref={coat3}
                                className={`relative mb-8 ${animatedImages.coat3 ? 'animate-slideInDown' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/coat3.avif"
                                    alt="Coat 3"
                                    style={{ height: '375px', width: '650px' }}
                                    className="object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/6')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">MakeUp</h1>
                    <div
                        className="mb-8 relative transition-opacity duration-1000"
                    >
                        <video
                            src="/static/Assets/videos/makeup.mp4"
                            style={{ height: '450px', width: '100%' }}
                            className="w-full object-cover rounded-lg"
                            autoPlay
                            loop
                            muted
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 left-4">
                            <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/7')} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Shoes</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div
                            ref={shoes1}
                            className={`relative ${animatedImages.shoes1 ? 'animate-slideInLeft' : ''}`}
                        >
                            <img
                                src="/static/Assets/images/shoes1.avif"
                                alt="Not found"
                                style={{ height: '900px' }}
                                className="w-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4">
                                <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/8')} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div
                                ref={shoes2}
                                className={`relative ${animatedImages.shoes2 ? 'animate-slideIn' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/shoes2.avif"
                                    alt="Not found"
                                    style={{ height: '450px' }}
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/8')} />
                                </div>
                            </div>
                            <div
                                ref={shoes3}
                                className={`relative ${animatedImages.shoes3 ? 'animate-slideInDown' : ''}`}
                            >
                                <img
                                    src="/static/Assets/images/shoes3.avif"
                                    alt="Not found"
                                    style={{ height: '426px' }}
                                    className="w-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/8')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl text-center mb-7 uppercase font-monoton font-extrabold text-black">Bridal Wear</h1>
                    <div
                        ref={formal}
                        className={`relative mb-8 flex justify-center ${animatedImages.formal ? 'animate-slideInLeft' : ''}`}
                    >
                        <img
                            src="/static/Assets/images/formals.avif"
                            alt="Formal wear"
                            style={{ height: '800px', width: '700px' }}
                            className="object-cover rounded-lg"
                        />
                        <div className="md:ml-72 ml-0 absolute bottom-4 left-4">
                            <TertiryButton text="See More" onClick={() => navigate('/jewelLisitng/9')} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Images;
