import React, { FC, useEffect, useState } from 'react'
import { debounce } from 'lodash'

type PluginProps = {
  selectedAgentData: any
  props: {
    selectedAgentData: any
    setSelectedAgentData: any
    enable: Object
    update: (id: string, data: object) => void
  }
}
import { Modal, Switch } from '@magickml/client-core'

export const AgentLoopWindow: FC<PluginProps> = props => {
  const { selectedAgentData, update, enable } = props.props
  const debouncedFunction = debounce((id, data) => update(id, data), 500)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [checked, setChecked] = useState(selectedAgentData.data.loop_enabled)
  const [disable, setDisable] = useState(false)
  const [state, setState] = useState({
    loop_interval: selectedAgentData?.data?.loop_interval,
  })
  useEffect(()=>{
    if (enable["LoopPlugin"] == false) {
      setChecked(false)
      setDisable(true)
    }
    if (enable['LoopPlugin'] == true){
      setChecked(true)
      setDisable(false)
    }
  }, [enable])
  const handleOnChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSave = () => {
    const data = {
      ...selectedAgentData,
      data: {
        ...selectedAgentData.data,
        ...state,
      },
    }

    update(selectedAgentData.id, data)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: '#222',
          padding: '2em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: disable ? 'none' : 'auto',
          opacity: disable ? 0.2 : 1,
        }}
      >
        <h3>Agent Update Loop</h3>
        <div
          style={{
            display: 'flex',
            paddingTop: '1em',
          }}
        >
          <button
            onClick={() => {
              setEditMode(true)
            }}
            style={{ marginRight: '10px', cursor: 'pointer' }}
          >
            Edit
          </button>
          <Switch
            checked={checked}
            onChange={e => {
              setChecked(!checked)
              debouncedFunction(selectedAgentData.id, {
                data: {
                  ...selectedAgentData.data,
                  loop_enabled: e.target.checked,
                },
              })
            }}
            label={''}
          />
        </div>
      </div>
      {editMode && (
        <Modal open={editMode} setOpen={setEditMode} handleAction={handleSave}>
          <div>
            <div>
              <span className="form-item-label">Loop Interval</span>
              <input
                type="text"
                pattern="[0-9]*"
                style={{ width: '100%' }}
                name="loop_interval"
                defaultValue={selectedAgentData.data?.loop_interval}
                placeholder="Run every X seconds"
                onChange={handleOnChange}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
