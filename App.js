import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';

export default class App extends React.Component {
  state = {
    todos : [
      {
        title : '건조기 돌리기',
        done : true
      },
      {
        title : '영어공부하기',
        done : false
      }
    ],
    showModal : false
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={()=>{
            this.setState({
              showModal : true
            })
          }}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({item, index}) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                remove={()=>{
                  this.setState({
                    todos : this.state.todos.filter((_, i)=>i !== index)
                  })
                }}
              />
            )
          }}
          keyExtractor={(_, index)=>{
            return `${index}`
          }}
         />
       <TaskModal
         isVisible={this.state.showModal}
         hide={()=>{
           this.setState({showModal : false})
         }}
         add={(title)=>{
           this.setState({
             todos : this.state.todos.concat({
               title : title,
               done : false
             }),
             showModal : false
           })
         }}
       />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
