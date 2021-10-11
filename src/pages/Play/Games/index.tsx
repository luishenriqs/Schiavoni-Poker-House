import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { SvgProps } from 'react-native-svg';
import Header from '../../../components/Header';
import GameCard from '../../../components/Cards/GameCard';
//==> Conversor de SVG: https://onlineconvertfree.com/pt/complete/jpg-svg/
import TeamBo from '../../../assets/teams/teamBo.svg';
import TeamDu from '../../../assets/teams/teamDu.svg';
import TeamDiego from '../../../assets/teams/teamDiego.svg';
import TeamFilipe from '../../../assets/teams/teamFilipe.svg';
import TeamLuisao from '../../../assets/teams/teamLuisao.svg';
import TeamPaulinho from '../../../assets/teams/teamPaulinho.svg';
import TeamRoger from '../../../assets/teams/teamRoger.svg';
import TeamLeandro from '../../../assets/teams/teamLeandro.svg';
import {
  Container,
  GamesList,
} from './styles';

export interface IGamesProps {
  id: string;
  date: string,
  firstImg: React.FC<SvgProps>;
  first: string,
  second: string,
  third: string,
  fourth: string,
  fifth: string,
  sixth: string,
  seventh: string,
  eighth: string,
  ninth: string,
  tenth: string,
}

// ***********[MOCK]***********
const GameList: IGamesProps[] = [
  {
    id: '1',
    date: '20/09/2021',
    firstImg: TeamDiego,
    first: 'Diego Souza',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '2',
    date: '13/09/2021',
    firstImg: TeamRoger,
    first: 'Roger Prata',
    second: 'Dú Schiavoni',
    third: 'Diego Souza',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '3',
    date: '06/09/2021',
    firstImg: TeamLeandro,
    first: 'Leandro Jácomo',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Diego Souza',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '4',
    date: '30/08/2021',
    firstImg: TeamDu,
    first: 'Dú Schiavoni',
    second: 'Diego Souza',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '5',
    date: '23/08/2021',
    firstImg: TeamPaulinho,
    first: 'Paulinho Coelho',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Diego Souza',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '6',
    date: '16/08/2021',
    firstImg: TeamFilipe,
    first: 'Filipe Lobanco',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Diego Souza',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
  {
    id: '7',
    date: '09/08/2021',
    firstImg: TeamLuisao,
    first: 'Luisão',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Dr. Bó',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Diego Souza',
    tenth: 'Márcio Silva',
  },
  {
    id: '8',
    date: '02/08/2021',
    firstImg: TeamBo,
    first: 'Dr. Bó',
    second: 'Dú Schiavoni',
    third: 'Roger Prata',
    fourth: 'Filipe Lobanco',
    fifth: 'Diego Souza',
    sixth: 'Paulinho Coelho',
    seventh: 'Ednelson',
    eighth: 'Leandro Jácomo',
    ninth: 'Luisão',
    tenth: 'Márcio Silva',
  },
 ]
// ****************************

export function Games({navigation}: {navigation: any}) {
  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <Container>
          <Header
            title='Games'
            text='De 02/ago a 20/set'
            headerSize={'small'}
            onPress={() => navigation.openDrawer()}
          />

          <GamesList
            data={GameList}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <GameCard
                date={item.date}
                svg={item.firstImg}
                first={item.first}
                second={item.second}
                third={item.third}
                fourth={item.fourth}
                fifth={item.fifth}
                sixth={item.sixth}
                seventh={item.seventh}
                eighth={item.eighth}
                ninth={item.ninth}
                tenth={item.tenth}
              />
            )}
          />

        </Container>
      </KeyboardAvoidingView>
    </>
  );
};
