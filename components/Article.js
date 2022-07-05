import React from "react";
import {View,StyleSheet,Text,SafeAreaView,Image} from "react-native";
//import {SafeAreaView} from "react-native-web";

const Article = () => {
    return(
    <SafeAreaView style={styles.container}>
        {/* image */}
        <Image source={{
            uri: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }}
        style={styles.image}
        />
           <View style={{padding: 20}}>

        {/* title */}
          <Text style={styles.title}>Noticias Tecnologicas</Text>

        {/* description */}
          <Text style={styles.description}>Este es un ejemplo de como se vera la noticia, Este es un ejemplo de como se vera la noticia, Este es un ejemplo de como se vera la noticia</Text>

        <View style={styles.data}>
          <Text style={styles.heading}>by: <Text style={styles.author}>Dofro Lucky</Text></Text>
          <Text style={styles.date}>Jul 5th 22</Text>
        </View>

        {/* source */}
        <View style={{marginTop: 10}}>
            <Text>source: <Text style={styles.source}>Programing</Text></Text>
        </View>
        </View>
    </SafeAreaView>)
}

export default Article;

const styles = StyleSheet.create({
    container: {
          width: "90%",
          alignSelf: "center",
          borderRadius: 40,
          shadowOpacity: 0.5,
          shadowColor: "#000",
          shadowOffset: {
            height: 5,
            width: 5
          },
          backgroundColor: "#edede9"
    },
    image: {
         height: 200,
         width: "100%",
         borderTopLeftRadius: 40,
         borderTopRightRadius: 40
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading: {

    },
    author: {
        fontWeight: "bold",
        fontSize: 15
    },
    date: {
        fontWeight: "bold",
        color: "#1e6091",
        fontSize: 15
    },
    source: {
        color: "#1e6091",
        fontWeight: "bold",
        fontSize: 18
    }
})