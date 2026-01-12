export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type AppStackParamList = {
    Tabs: undefined;
    NoteDetail: { id: number };
    EditNote: { id: number };
};

export type TabParamList = {
    Notes: undefined;
    CreateNote: undefined;
    Profile: undefined
};