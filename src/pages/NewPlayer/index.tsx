import React, { useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from './CategorySelect';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
} from './styles';

interface IFormData {
    name: string;
    email: string;
}

const schema = Yup.object().shape({
    value: Yup
        .number()
        .required('O valor é obrigatório')
        .positive('O valor não pode ser negativo')
        .typeError('Informe um valor numérico'),
    description: Yup.string(),
});
  

export function NewPlayer() {
    const [players, setPlayers] = useState('');
    // const [type, setType] = useState('');
    // const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    // const [category, setCategory] = useState({
    //     key: 'category',
    //     name: 'categoria',
    // });

    const navigation = useNavigation();

    const { control, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        console.log('-----> PLAYERS: ', players);
    }, []);

    async function handleRegister(form: IFormData) {
        const newPlayer = {
            id: String(uuid.v4()),
            name: form.name,
            email: form.email,
        }
        try {
            const dataKey = '@sph:players';
            const players = await AsyncStorage.getItem(dataKey);
            const currentPlayers = players ? JSON.parse(players) : [];
            const playersFormated = [...currentPlayers, newPlayer]
            await AsyncStorage.setItem(dataKey, JSON.stringify(playersFormated));

            reset();
            if (players) {
                setPlayers(players);
            }
            // setType('');
            // setCategory({
            //     key: 'category',
            //     name: 'categoria',
            // });

            // navigation.navigate('Lista');

        } catch (error) {
            Alert.alert('Não foi possível salvar os dados')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastre um novo jogador</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm
                            name='name'
                            control={control}
                            placeholder='Nome'
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name='email'
                            control={control}
                            placeholder='Email'
                            keyboardType="email-address"
                            error={errors.email && errors.email.message}
                        />
                    </Fields>
                    <Button
                        title='Enviar'
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>
                {/* <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category= {category}
                        setCategory= {setCategory}
                        closeSelectCategory= {handleCloseSelectCategoryModal}
                    />
                </Modal> */}
            </Container>
        </TouchableWithoutFeedback>
    );
};