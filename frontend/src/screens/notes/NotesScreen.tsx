import { FlatList, View } from 'react-native';
import SearchBar from '../../components/common/SearchBar';
import { useState } from 'react';
import NoteCard from '../../components/common/NoteCard';
import EmptyNote from '../../components/common/EmptyNote';

export default function NotesScreen() {
  const notes: any[] = [{
    title: 'Sample Note',
    content: 'This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.',
    createdAt: '2024-06-01',
    hasAudio: true,
    hasImage: true,
  },
{
    title: 'Sample Note',
    content: 'This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.This is a sample note content.',
    createdAt: '2024-06-01',
    hasAudio: true,
    hasImage: true,
  }];
  
  const [search, setSearch] = useState('');

  return (
    <View className="bg-white dark:bg-dark flex-1 mt-8">
      <SearchBar
        value={search}
        onChangeText={setSearch}
        onPressMenu={() => {
          console.log('Open filter');
        }}
      />
      <FlatList 
        data={notes}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={({item}) => (
          <NoteCard
            title={item.title}
            content={item.content}
            date={item.createdAt}
            hasAudio={item.hasAudio}
            hasImage={item.hasImage}
            onPress={() => console.log('Note pressed')}
            onDelete={() => console.log('Delete note')}
          />
        )}
        ListEmptyComponent={<EmptyNote/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
