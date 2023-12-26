import React from 'react';
import Link from 'next/link';

const ProfileOrders = () => {
  return (
    <div
    className='min-h-[300px] mt-10'
    >
         <p className='text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]'>
          Profile Orders
        </p>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            <Link href="/order">To order</Link>
                        </td>
                        <td>

                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default ProfileOrders;