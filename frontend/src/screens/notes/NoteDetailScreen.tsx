import CreateNoteScreen from './CreateNoteScreen';

export default function NoteDetailScreen({ route }: any) {
  const { note } = route.params;
  return <CreateNoteScreen {...note} readOnly />;
}
