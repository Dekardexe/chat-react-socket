import { useSelector } from 'react-redux';

const useUserList = () => {
   const users = useSelector(state => state.userStore.users);

   return users;
};

export default useUserList;