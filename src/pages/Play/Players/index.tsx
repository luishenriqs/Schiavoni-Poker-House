import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Animated } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import Header from '../../../components/Header';
import AvatarCard from '../../../components/Cards/AvatarCard';
//==> Conversor de SVG: https://onlineconvertfree.com/pt/complete/jpg-svg/
import PsopImage from '../../../components/Cards/PsopImage';
import PSOPSvg from '../../../assets/psop/PSOPLogo.svg';
import KeanuReaves from '../../../assets/profiles/playerProfile2.svg';

import {
    Container,
    LoadingContainer,
    GamesList,
} from './styles';

export interface IPlayersList {
    id: string,
    name: string;
    avatar: React.FC<SvgProps>;
  }


const playersList: IPlayersList[] = [
    {
      id: '1',
      name: 'Leandro Jácomo',
      avatar: KeanuReaves,
    },
    {
      id: '2',
      name: 'Dr. Bó',
      avatar: KeanuReaves,
    },
    {
      id: '3',
      name: 'Diego Souza',
      avatar: KeanuReaves,
    },
    {
      id: '4',
      name: 'Roger Prata',
      avatar: KeanuReaves,
    },
    {
      id: '5',
      name: 'Márcio Silva',
      avatar: KeanuReaves,
    },
    {
      id: '6',
      name: 'Filipe Lobanco',
      avatar: KeanuReaves,
    },
    {
      id: '7',
      name: 'Dú Schiavoni',
      avatar: KeanuReaves,
    },
    {
      id: '8',
      name: 'Léo Criado',
      avatar: KeanuReaves,
    },
    {
      id: '9',
      name: 'Luisão',
      avatar: KeanuReaves,
    },
    {
      id: '10',
      name: 'Paulinho Coelho',
      avatar: KeanuReaves,
    },
    {
      id: '11',
      name: 'Ednelson',
      avatar: KeanuReaves,
    },
  ]

const { width } = Dimensions.get('window');
let flatList: IPlayersList;

function infiniteScroll(dataList: IPlayersList[]) {
  const numberOfData = dataList.length;
  let scrollValue = 0, scrolled = 0;

  setInterval(() => {
    scrolled ++
    if(scrolled < numberOfData)
      scrollValue = scrollValue + width

    else {
      scrollValue = 0
      scrolled = 0
    }

    this.flatList.scrollToOffset({ Animated: true, offset: scrollValue })
    
  }, 3000)
}

export function Players({navigation}: {navigation: any}) {
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme();

    const scrollX = new Animated.Value(0);
    let position= Animated.divide(scrollX, width);

    const [dataList, setDataList] = useState(playersList);

    useEffect(() =>{
      setDataList(playersList);
      infiniteScroll(dataList)
    }, []);

    return (
        <Container>
            {
                isLoading ? 
                    <LoadingContainer>
                        <ActivityIndicator 
                            color={theme.colors.primary}
                            size='large'
                        />
                    </LoadingContainer> :
                <>
                    <Header 
                        title='Players'
                        text='Temporada 2021/22' 
                        headerSize='big'
                        onPress={() => navigation.openDrawer()}
                    />
                    <PsopImage
                      svg={PSOPSvg}
                    />

                    <GamesList
                      data={playersList}
                      ref={(flatList) => {this.flatList = flatList}}
                      horizontal={true}
                      pagingEnabled
                      scrollEnabled
                      snapToAlignment = 'center'
                      scrollEventThrottle={16}
                      decelerationRate={'fast'}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      renderItem={({ item, index }) => (
                        <AvatarCard
                          svg={item.avatar}
                          title={item.name}
                        />
                      )}
                    />
                </>
            }
        </Container>
    )
}
