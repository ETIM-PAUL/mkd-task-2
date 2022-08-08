export const roomsSelector = ({ newRooms: { rooms: value = [] } }: any) => value;
export const levelRoomsSelector = ({ newRooms: { levelRooms: value = [] } }) => value;
export const generalLevelsSelector = ({ newRooms: { levels: value = [] } }) => value;
export const roomButtonsLevelsSelector = ({ newRooms: { levels: value = [] } }) => value;
export const fetchingLocationRoomsSelector = ({ newRooms: { fetchingLocationRooms: value = true } }: any) => value;
export const currentPageSelector = ({ newRooms: { currentPage: value = 1 } }) => value;
export const lastPageSelector = ({ newRooms: { lastPage: value = 1 } }) => value;
export const roomLevelUpdatedSelector = ({ newRooms: { roomLevelUpdated: value = false } }) => value;
export const roomCreatedSelector = ({ newRooms: { roomCreated: value = false } }) => value;
export const roomDeletedSelector = ({ newRooms: { roomDeleted: value = false } }) => value;
export const uploadingAlbumsSelector = ({ newRooms: { uploadingAlbums: value = [] } }) => value;