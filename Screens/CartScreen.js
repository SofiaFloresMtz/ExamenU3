import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const CartScreen = ({navigation}) => {

    const {carro,setCarro,total,setTotal,eliminar} = useContext(ProductosContext);

    const limpiar =()=>{
        setCarro({})
        setTotal(0)

        navigation.goBack();
        alert("¡Feliz compra!")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    carro.length>0
                    ?
                    carro.map((a,i)=>(
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{a.descripcion}</ListItem.Title>
                                <ListItem.Subtitle>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</ListItem.Subtitle>
                            </ListItem.Content>
                            <View style={styles.buttons}>
                                <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(i,a.precio)}/>
                            </View>
                        </ListItem>

                    ))
                    :
                    <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>Carrito vacio</Text>


                }

                <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>Total: ${(total)}</Text>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={limpiar}
                    title="Comprar"
                />


                </ScrollView>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
});