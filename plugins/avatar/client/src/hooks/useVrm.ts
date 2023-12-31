import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'
import { DEFAULT_MODEL } from '../utils/constants'
import { initLogger, getLogger } from '@magickml/core'

export const useVrm = (vrmUrl) => {
  const [vrm, setVrm] = useState(null)
  initLogger({ name: "AIDE" })
  const logger = getLogger()

  useEffect(() => {
    (async () => {
      let gltf;
      if (!vrmUrl) {
        return
      }

      //load vrm file
      try {
        gltf = await gltfLoader.loadAsync(vrmUrl)
      } catch (e) {
        //default vrm ( Ref! drag/drop model )
        logger.error('non standard model %s', vrmUrl)
        gltf = await gltfLoader.loadAsync(DEFAULT_MODEL)
      }
      if (!gltf) {
        logger.error('non existing model %s', vrmUrl)
        return
      }

      //set avatar with new gltf tranform
      const newVrm = gltf.userData.vrm; 
      VRMUtils.rotateVRM0(newVrm);
      setVrm(newVrm)
    })()
  }, [vrmUrl])

  return vrm
}

const gltfLoader = new GLTFLoader();
gltfLoader.register((parser) => new VRMLoaderPlugin(parser));