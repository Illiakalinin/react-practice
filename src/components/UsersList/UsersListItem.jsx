function UsersListItem (props) {
  const {
    selectUser,
    isLight,
    user: { id, isSelected, firstName, lastName },
  } = props;

  const inlineStyle = {
    backgroundColor: isSelected
      ? isLight
        ? 'yellow'
        : 'violet'
      : 'transparent',
  };

  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      {firstName} {lastName}
    </li>
  );
}

export default UsersListItem;
