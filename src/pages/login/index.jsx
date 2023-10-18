import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { LogUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [primaryButton, setPrimaryButton] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoginModeFromStorage = JSON.parse(
      localStorage.getItem('isLoginMode'),
    );
    setIsLoginMode(isLoginModeFromStorage || false);
  }, []);

  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const result = await LogUser(email, password);
      setPrimaryButton(true);
      setUser(result.username);
      localStorage.setItem('user', JSON.stringify(result.username));
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setPrimaryButton(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to='/login'>
          <S.ModalLogo>
            <S.ModalLogoImage src='/img/logo_modal.png' alt='logo' />
          </S.ModalLogo>
        </Link>
        <>
          <S.Inputs>
            <S.ModalInput
              type='text'
              name='login'
              placeholder='Почта'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            <S.ModalInput
              type='password'
              name='password'
              placeholder='Пароль'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={handleLogin} disabled={primaryButton}>
              {primaryButton ? 'Загрузка...' : 'Войти'}
            </S.PrimaryButton>
            <Link to='/register'>
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}