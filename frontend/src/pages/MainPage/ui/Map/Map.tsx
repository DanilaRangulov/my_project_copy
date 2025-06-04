import React, {useEffect, useState} from 'react';
import * as classes from './map.module.scss'
import vk from 'shared/assets/images/icons/media/vk.png'
import inst from 'shared/assets/images/icons/media/inst.png'
import tg from 'shared/assets/images/icons/media/tg.png'
import whatsapp from 'shared/assets/images/icons/media/whatsapp.png'
import ChoiseClinicDataMenu from "shared/ui/ChoiseClinicDataMenu/ChoiseClinicDataMenu";
import Button from "shared/ui/Button/Button";
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
const Map = () => {
    const [currentMap, setMap] = useState<string>() // currentData
    const [currentData, setCurrentData] = useState<any>() // currentData
    const [activeButton, setActiveButton] = useState<string>()
    const [data, setData] = useState<any>();
    // const API_URL = process.env.API_URL
    const getData = () => {
        setCurrentData(data.find((item: any) => item.name === activeButton))
        setMap(data.find((item: any) => item.name === activeButton).yandex_map)
    }
    async function fetchGallery2() {
        try {
            const response = await fetch(`https://nikaclinicsite.onrender.com/gallery_db`);
            const data = await response.json(); // Парсинг JSON-ответа
            const dataByName = data.reduce((acc: Record<string, Array<string>>, item: {name: string, imageURL: Array<string>}) => {
                acc[item.name] = item.imageURL;
                return acc;
            }, {});
            return data; // Возвращаем массив изображений
        } catch (error) {
            console.error('Failed to fetch gallery:', error);
            return [];
        }
    }
    useEffect(() => {
        fetchGallery2().then(
            (received_data: any) => {
                setData(received_data);
                setActiveButton(received_data[0].name)
                setCurrentData(received_data.find((item: any) => item.name === received_data[0].name))
                setMap(received_data.find((item: any) => item.name === received_data[0].name).yandex_map)
            })
    }, [])
    useEffect(() => {
        if (data){
            getData();
        }
    }, [activeButton])
    return (
        <div className={'container'}>
                <ContainerDescription head={'Как нас найти?'} description={''} position={'center'}/>
                <ChoiseClinicDataMenu
                    elements={['Богатырский', 'Новороссийская']}
                    activeButton={activeButton}
                    setCurrentButton={setActiveButton}
                />
                {currentData
                    ?
                    <div className={classes.map_wrapper}>
                        <div className={classes.map}>
                            <div className={classes.yandex_map}>
                                <iframe
                                    src={currentData.yandex_map}
                                    width="100%" frameBorder="0"></iframe>
                            </div>
                            <div className={classes.map_text_content}>
                                <p className={'medium-text'}>Клиника на Новороссийской</p>
                                <p className={'medium-text'}>{currentData.address}</p>
                                <div className={classes.metro}>
                                    <div className={classes.metro_item}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="160"
                                             viewBox="0 0 2e7 1.508e7">
                                            <path
                                                d="m6026765 2907127c-299804-1015676-1113594-904356-1.67e6 -431300-1370626 1266075-3155291 3923495-2013094
                                                 7.75e6 956578 3241739 4936901 5314839 4936901 5314839h-4.64e6s-2395828-2685264-2.61e6 -5843500c-271260-3993020
                                                  1327930-6511332 3183988-8153020 1741824-1544365 3398006-2003480 3398006-2003480l3387831 1.11e7 3387831-1.11e7s1656182
                                                   459116 3398006 2003480c1856058 1641687 3455248 4.16e6 3183988 8153020-214173 3158236-2.61e6 5843500-2.61e6
                                                   5843500h-4.64e6s3.98e6 -2073100 4936900-5314839c1142197-3826069-642468-6483489-2013094-7.75e6
                                                   -556826-473056-1370617-584376-1.67e6 431300-1027971 3241740-3973210 1.253e7 -3973210 1.253e7s-2945239-9291363-3973210-1.253e7z"/>
                                        </svg>
                                        <p className={'small-text'}>{currentData.metro}</p>
                                    </div>
                                    <div className={classes.metro_item}>
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" aria-labelledby="walkingIconTitle"
                                             stroke="#000000" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" color="#000000"><title
                                            id="walkingIconTitle">Walking</title>
                                            <circle cx="13" cy="5" r="1"/>
                                            <path
                                                d="M15 20L14 17L11 14M11 14L12 9M11 14L8 20M12 9L15 12L17 13M12 9L9 11L8 14"/>
                                        </svg>
                                        <p className={'small-text'}>{currentData.time_from_metro} мин</p>
                                    </div>
                                    </div>
                                    <p className={'medium-text'}>(812) 604-24-46</p>
                                    <div className={classes.media_icons}>
                                        <img src={vk}/>
                                        <img src={tg}/>
                                        <img src={inst}/>
                                        <img src={whatsapp}/>
                                    </div>
                                    <Button color={'black'} align={'flex-start'}><p className={'small-text'}>Записаться на прием</p>
                                    </Button>
                                    {/*<div className={classes.work_time}>*/}
                                    {/*        <p className={'large-text'}>ПН-ВС</p>*/}
                                    {/*        <p className={'large-text'}>9:00 - 21:00</p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    : 'Loading...'

                        }
                    </div>
                    );
                };

export default Map;