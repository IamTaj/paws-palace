import { Stack } from '@mui/material'
import React from 'react'
import { renderComponentUtility } from '@/components/renderComponent'

export default function PageBody({ items }: any) {
    return (
        <Stack width={"100%"}>
            {
                items?.map((item: any, index: number) =>
                    <React.Fragment key={`component-${index}`}>
                        {renderComponentUtility(item)}
                    </React.Fragment>)
            }
        </Stack>
    )
}
