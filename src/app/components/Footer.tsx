import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram
} from 'react-icons/ai';
import { Container } from './Container';

export const Footer = () => {
	return (
		<div className='bg-gray-100 text-neutral-500'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2 pt-12 pb-10 border-b-[1px] border-neutral-300'>
					<div>
						<p className='font-bold pb-1'>Asistencia</p>
						<a href='#' className='block pb-1'>
							Centro de ayuda
						</a>
						<a href='#' className='block pb-1'>
							AirCover
						</a>
						<a href='#' className='block pb-1'>
							Antidiscriminación
						</a>
						<a href='#' className='block pb-1'>
							Apoyo para discapacitados
						</a>
						<a href='#' className='block pb-1'>
							Opciones de cancelación
						</a>
						<a href='#' className='block'>
							Problemas en el vecindario
						</a>
					</div>
					<div>
						<p className='font-bold pb-1'>Modo anfitrión</p>
						<a href='#' className='block pb-1'>
							Pon tu espacio en Airbnb
						</a>
						<a href='#' className='block pb-1'>
							AirCover para anfitriones
						</a>
						<a href='#' className='block pb-1'>
							Recursos para anfitriones
						</a>
						<a href='#' className='block pb-1'>
							Foro Comunitario
						</a>
					</div>
					<div>
						<p className='font-bold pb-1'>Airbnb</p>
						<a href='#' className='block pb-1'>
							Sala de prensa
						</a>
						<a href='#' className='block pb-1'>
							Funciones nuevas
						</a>
						<a href='#' className='block pb-1'>
							Carreras
						</a>
					</div>
				</div>
				<div className='flex flex-wrap justify-between pt-3 pb-3'>
					<div className='flex gap-3 items-center'>
						<span>© 2023 Airbnb, Inc.</span> <a href='#'>Privacidad</a>
						<a href='#'>Términos</a> <a href='#'>Mapa del sitio</a>
						<a href='#'>Datos de la empresa</a>
					</div>
					<div className='flex gap-2 justify-end items-center'>
						$ COP <AiFillFacebook size={30} /> <AiFillTwitterSquare size={30} />
						<AiFillInstagram size={30} />
					</div>
				</div>
			</Container>
		</div>
	);
};
