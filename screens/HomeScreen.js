import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView,FlatList} from "react-native";
import Article from "../components/Article";
import axios from "axios";
//import {ScrollView} from "react-native-web";

const HomeScreen = () => {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey=ce7ee0133f9c45d48741aa6e7ace8532', {
        params: {
            category: "sports",
        }
        })
          .then( (response) =>{
          
            setArticles(response.data.articles);
          })
          .catch(function (error) {
            // manejar error
            console.log(error);
          })
          .then(function () {
            // siempre sera executado
          });
    }
    useEffect(() => {
        getNews();
    },[]);
    
    return(
    <SafeAreaView style={styles.container}>
        <FlatList 
            data={articles}
            renderItem = {({item}) =>
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    url = {item.url}
            />}
            keyExtractor = {(item) => item.title}
        />

    </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})