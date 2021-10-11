import React, {useEffect} from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import LeaderCard from '../../../components/Cards/LeaderCard';
import RankingCard from '../../../components/Cards/RankingCard';
//==> Conversor de SVG: https://onlineconvertfree.com/pt/complete/jpg-svg/
import TeamBo from '../../../assets/teams/teamBo.svg';
import TeamDu from '../../../assets/teams/teamDu.svg';
import TeamDiego from '../../../assets/teams/teamDiego.svg';
import TeamFilipe from '../../../assets/teams/teamFilipe.svg';
import TeamLeoCriado from '../../../assets/teams/teamLeoCriado.svg';
import TeamLuisao from '../../../assets/teams/teamLuisao.svg';
import TeamPaulinho from '../../../assets/teams/teamPaulinho.svg';
import TeamRoger from '../../../assets/teams/teamRoger.svg';
import TeamLeandro from '../../../assets/teams/teamLeandro.svg';
import TeamMarcio from '../../../assets/psop/PSOPLogo.svg';
import TeamEdnelson from '../../../assets/psop/PSOPLogo.svg';
import PSOPLogo from '../../../assets/psop/PSOPLogo.svg';
import {
  Container,
  LabelContainer,
  StatusList,
} from './styles';

export interface IRankingProps {
  id: string,
  position: number;
  name: string;
  points: number;
  img: React.FC<SvgProps>;
}

// ***********[MOCK]***********
const rankingList: IRankingProps[] = [
  {
    id: '1',
    position: 1,
    name: 'Luisão',
    points: 98,
    img: TeamLuisao,
  },
  {
    id: '2',
    position: 2,
    name: 'Leandro Jácomo',
    points: 89,
    img: TeamLeandro,
  },
  {
    id: '3',
    position: 3,
    name: 'Dú Schiavoni',
    points: 86,
    img: TeamDu,
  },
  {
    id: '4',
    position: 4,
    name: 'Diego Souza',
    points: 73,
    img: TeamDiego,
  },
  {
    id: '5',
    position: 5,
    name: 'Roger Prata',
    points: 69,
    img: TeamRoger,
  },
  {
    id: '6',
    position: 6,
    name: 'Filipe Lobanco',
    points: 66,
    img: TeamFilipe,
  },
  {
    id: '7',
    position: 7,
    name: 'Paulinho Coelho',
    points: 57,
    img: TeamPaulinho,
  },
  {
    id: '8',
    position: 8,
    name: 'Dr. Bó',
    points: 48,
    img: TeamBo,
  },
  {
    id: '9',
    position: 9,
    name: 'Léo Criado',
    points: 41,
    img: TeamLeoCriado,
  },
  {
    id: '10',
    position: 10,
    name: 'Márcio Silva',
    points: 31,
    img: TeamMarcio,
  },
  {
    id: '11',
    position: 11,
    name: 'Ednelson',
    points: 30,
    img: TeamEdnelson,
  },
  ]
// ****************************

  export function Ranking({navigation}: {navigation: any}) {

  /* ****************** [ORDERING RANKING LIST] *********************** */
  // First: ordering the values;
  const disordered:number[] = [];
  for (var i = 0; i < rankingList.length; i++) {
      disordered.push(rankingList[i].points)
  }

  const orderedValue = disordered.sort(order);
  function order(a: number, b: number) {
      return b - a;
  };

  // Second: ordering ranking list array;
  const orderedRankingList: IRankingProps[] = [] 
  for (var i = 0; i < rankingList.length; i++) {
      const ordered = rankingList.filter(
          (ranking: IRankingProps) => Number(
              ranking.points) === orderedValue[i]
          );
      orderedRankingList.push(ordered[0]);
  }
/* ********************************************************************/

// *******[LEADER IMAGE]*******
// Initial image value: PSOPLogo;
let Leader: React.FC<SvgProps> = PSOPLogo;

if (orderedRankingList[0].name) {
  Leader = orderedRankingList[0].img;
}
// ****************************

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <Container>
          <Header
            title='Ranking'
            text='De 02/ago a 20/set'
            headerSize={'big'}
            onPress={() => navigation.openDrawer()}
          />

          <LeaderCard 
            svg={Leader}
            title='LÍDER DA SEMANA:'
            leadersName={orderedRankingList[0].name}
            weeks='3 º semana consecutiva'
          />

          <LabelContainer>
            <Label labelSize={'small'} text='Posição' />
            <Label labelSize={'big'} text='Jogador' />
            <Label labelSize={'small'} text='Pontos' />
          </LabelContainer>

          <StatusList
            data={orderedRankingList}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <RankingCard 
                svg={item.img}
                // position={`${String(index + 1)} º`}
                position={`${item.position} º`}
                name={item.name}
                points={item.points}
              />
            )}
          />
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};
