import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import getCurrentUser from '@/app/actions/getCurrentUser';

const prisma = new PrismaClient();

interface IParams {
	listingId?: string;
}

export async function DELETE(
	_request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const { listingId } = params;

	if (!listingId || typeof listingId !== 'string') {
		throw new Error('Invalid ID');
	}

	const listing = await prisma.listing.deleteMany({
		where: {
			id: listingId,
			userId: currentUser.id
		}
	});

	return NextResponse.json(listing);
}
