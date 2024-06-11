import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"

import moment from "moment"
import 'moment/locale/pt-br' 

import today_Image from "../../assets/imgs/today.jpg"

export default class TaskList extends Component{
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.titleBar}>
                <ImageBackground source={today_Image} style={styles.background}>
                <view style={styles.tasklist}>
                    <text style={styles.title}>Hoje</text>
                    <text style={styles.subTitle}>{today}</text>
                </view>
                </ImageBackground>
                <view style={styles.tasklist}>
                    <text>Lista de Tarefas</text>
                </view>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    tasklist:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marinButtom: 20
    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marinButtom: 30
    }
})
