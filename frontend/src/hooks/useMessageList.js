import { useSelector } from 'react-redux';

const useMessageList = () => {
   const messages = useSelector(state => state.messageStore.messages);

   return messages;
};

export default useMessageList;