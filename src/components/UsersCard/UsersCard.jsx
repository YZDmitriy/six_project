import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsersCard.scss';
import axios from 'axios';
import { Success } from './Success';
import { Users } from './Users';

// Тут список пользователей: https://reqres.in/api/users

export const UsersCard = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((resp) => {
        const json = resp.data;
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении пользователей!');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <>
      <div className='back_card'>
        <div className='users'>
          {success ? (
            <Success count={invites.length} />
          ) : (
            <Users
              items={users}
              isLoading={isLoading}
              searchValue={searchValue}
              onChangeSearchValue={onChangeSearchValue}
              invites={invites}
              onClickInvite={onClickInvite}
              onClickSendInvites={onClickSendInvites}
            />
          )}
          <button onClick={backPage} className="send-invite-btn">Go to the home page</button>
        </div>
      </div>
    </>
  );
};
