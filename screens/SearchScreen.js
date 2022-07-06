import react, {useState} from "react"
import {View, Text, StyleSheet, FlatList} from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Article";

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);

   const searchArticles = () =>{
        axios.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey=ce7ee0133f9c45d48741aa6e7ace8532', {
               params: {
                   category: "sports",
                   q: searchText
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
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>

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
                    />}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})