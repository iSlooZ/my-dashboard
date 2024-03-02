import Link from "next/link";
import { SimplePokemon } from "..";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props{
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }:Props) => {

  const { id,name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          
          <Image
            key={ pokemon.id }
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={ pokemon.name }
            priority={ false }
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link 
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`dashboard/pokemon/${id}`}
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex justify-center items-center">

              <div className="text-green-600">
               <IoHeartOutline className="text-red-600"/>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  No es favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>

          </Link>
          
        </div>

      </div>
    </div>
  );
};