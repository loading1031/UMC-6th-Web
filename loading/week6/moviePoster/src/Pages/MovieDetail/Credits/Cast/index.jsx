import { CastContainer, Name, Profile } from "./styles";

function Cast({ cast }) {
  return (
    <CastContainer>
      <Profile
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
        }
        alt={cast.name || "Unknown"} // 출연자 이름이 없는 경우 'Unknown'으로 대체
      />
      <Name>{cast.name}</Name>
    </CastContainer>
  );
}

export default Cast;
