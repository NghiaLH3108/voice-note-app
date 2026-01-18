import { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import ImageGrid from '../../components/image/ImageGrid';
import AudioList from '../../components/audio/AudioList';

export default function CreateNoteScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [audios, setAudios] = useState<string[]>([]);

  return (
    <ScrollView className="bg-white dark:bg-dark mt-28 p-8">
      <TextInput
        placeholder="Title here"
        value={title}
        onChangeText={setTitle}
        className="text-4xl font-bold text-primary dark:text-white mt-6"
      />
      <TextInput
        multiline
        placeholder="Content here"
        value={content}
        onChangeText={setContent}
        className="mt-4 text-xl text-black dark:text-white leading-6"
      />

      <View className="h-px bg-lightGrey my-10" />

      <ImageGrid
        images={images}
        onAdd={() => {}}
        onRemove={i =>
          setImages(prev => prev.filter((_, index) => index !== 1))
        }
      />

      <View className="h-px bg-lightGrey my-10" />

      <AudioList
        audios={audios}
        onAdd={() => {}}
        onRemove={i =>
          setAudios(prev => prev.filter((_, index) => index !== 1))
        }
      />
    </ScrollView>
  );
}
