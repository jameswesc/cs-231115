import { getContext, setContext } from 'svelte'
import type { Pane } from 'tweakpane'

const KEY = '__pane-key__'

type PaneContext = {
    getPane: () => Pane
}

export const setPaneContext = (getPane: () => Pane) => {
    setContext<PaneContext>(KEY, {
        getPane,
    })
}

export const getPane = () => {
    const { getPane } = getContext<PaneContext>(KEY)
    return getPane()
}
