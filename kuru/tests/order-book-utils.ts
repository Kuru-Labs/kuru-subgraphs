import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  Initialized,
  OrderCreated,
  OrdersCanceled,
  OwnershipTransferred,
  Trade,
  Upgraded
} from "../generated/OrderBook/OrderBook"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOrderCreatedEvent(
  orderId: BigInt,
  owner: Address,
  size: BigInt,
  price: i32,
  isBuy: boolean
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "price",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(price))
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("isBuy", ethereum.Value.fromBoolean(isBuy))
  )

  return orderCreatedEvent
}

export function createOrdersCanceledEvent(
  orderId: Array<BigInt>,
  owner: Address
): OrdersCanceled {
  let ordersCanceledEvent = changetype<OrdersCanceled>(newMockEvent())

  ordersCanceledEvent.parameters = new Array()

  ordersCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigIntArray(orderId)
    )
  )
  ordersCanceledEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ordersCanceledEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTradeEvent(
  orderId: BigInt,
  makerAddress: Address,
  isBuy: boolean,
  price: i32,
  updatedSize: BigInt,
  takerAddress: Address,
  filledSize: BigInt
): Trade {
  let tradeEvent = changetype<Trade>(newMockEvent())

  tradeEvent.parameters = new Array()

  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "makerAddress",
      ethereum.Value.fromAddress(makerAddress)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("isBuy", ethereum.Value.fromBoolean(isBuy))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "price",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(price))
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "updatedSize",
      ethereum.Value.fromUnsignedBigInt(updatedSize)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "takerAddress",
      ethereum.Value.fromAddress(takerAddress)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "filledSize",
      ethereum.Value.fromUnsignedBigInt(filledSize)
    )
  )

  return tradeEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
