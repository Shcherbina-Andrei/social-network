import { AppDispatch } from '@/core/providers/store-provider';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
